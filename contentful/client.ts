import {
  createClient,
  EntryCollectionWithLinkResolutionAndWithoutUnresolvableLinks,
  EntriesQueries,
  EntryWithLinkResolutionAndWithoutUnresolvableLinks,
  Entry
} from "contentful";
import { TypeNewsFields, TypePageFields, TypeMicrocopyFields, TypeCustomPageFields } from "../generated/contentful";
import { EntryWithoutLinkResolution } from "contentful/lib/types/entry";

// Trying very hard not to expose the raw client to get good utility functions.
const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

enum ContentModels {
  News = "news",
  Page = "page",
  Microcopy = "microcopy"
}

type GetEntries<Fields> = (
  query?: EntriesQueries<Fields>
) => Promise<
  EntryCollectionWithLinkResolutionAndWithoutUnresolvableLinks<Fields>
>;

type GetAllEntries<Fields> = (
  query?: EntriesQueries<Fields>
) => Promise<EntryWithLinkResolutionAndWithoutUnresolvableLinks<Fields>[]>;

type GetEntry<Fields> = (
  id: string,
  query?: EntriesQueries<Fields>
) => Promise<EntryWithoutLinkResolution<Fields>>;

export const getNewsEntries: GetEntries<TypeNewsFields> = async (query = {}) =>
  client.withoutUnresolvableLinks.getEntries<TypeNewsFields>({
    ...query,
    content_type: ContentModels.News,
  });

export const getAllNewsEntries: GetAllEntries<TypeNewsFields> = async (
  query = {}
) => {
  return (await getAllEntries<TypeNewsFields>(query, getNewsEntries)).items
};

export const getNewsEntry: GetEntry<TypeNewsFields> = async (id, query = {}) =>
  client.withoutUnresolvableLinks.getEntry<TypeNewsFields>(id, {
    ...query,
  });

export const getPageEntries: GetEntries<TypePageFields> = async (query = {}) =>
  client.withoutUnresolvableLinks.getEntries<TypePageFields>({
    ...query,
    content_type: ContentModels.Page,
  });

export const getAllPageEntries: GetAllEntries<TypePageFields> = async (
  query = {}
) => {
  return (await getAllEntries<TypePageFields>(query, getPageEntries)).items
};

export const getPage: GetEntry<TypePageFields> = async (id, query = {}) =>
  client.withoutUnresolvableLinks.getEntry<TypePageFields>(id, {
    ...query,
  });

export const getCustomPageAndMicrocopy = async (pageId: string): Promise<{
  customPage: Entry<TypeCustomPageFields>,
  microcopy: Entry<TypeMicrocopyFields>[],
}> => {
  const res = await getAllEntries({
    "fields.containingPage.sys.id": pageId,
    content_type: ContentModels.Microcopy,
    limit: 1000,
  }, client.withoutUnresolvableLinks.getEntries)

  return {
    customPage: (res.includesEntries as Entry<TypeCustomPageFields>[]).find(entry => entry.sys.id == pageId), // matching CustomPage guaranteed to be included because the query searches for things that have it included, and using `client.withoutUnresolvableLinks`
    microcopy: res.items as Entry<TypeMicrocopyFields>[],
  }
}

export const getAllEntries = async <Fields extends {}>(
  query: EntriesQueries<Fields> = {},
  callback: GetEntries<Fields>
): Promise<{
  items: EntryWithLinkResolutionAndWithoutUnresolvableLinks<Fields>[],
  includesEntries: EntryWithLinkResolutionAndWithoutUnresolvableLinks<Fields>[]
}> => {
  let items: EntryWithLinkResolutionAndWithoutUnresolvableLinks<Fields>[] = [];
  let includesEntries: EntryWithLinkResolutionAndWithoutUnresolvableLinks<Fields>[] = [];
  let isDone = false;
  let skip: number | undefined = undefined;
  while (!isDone) {
    let res = await callback({
      ...query,
      skip,
    });
    skip = res.skip + res.limit;
    items = items.concat(res.items);
    if (res.includes && res.includes.Entry) {
      let newIncludes = (res.includes.Entry as EntryWithLinkResolutionAndWithoutUnresolvableLinks<Fields>[]).filter((includedEntry) => {
        return !includesEntries.find(existingInclude => existingInclude.sys.id == includedEntry.sys.id)
      })
      includesEntries.concat(newIncludes)
    }
    if (res.skip + res.limit >= res.total) {
      isDone = true;
    }
  }

  return {
    items,
    includesEntries
  };
};
