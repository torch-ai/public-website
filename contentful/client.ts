import {
  createClient,
  EntryCollectionWithLinkResolutionAndWithoutUnresolvableLinks,
  EntriesQueries,
  EntryWithLinkResolutionAndWithoutUnresolvableLinks,
} from "contentful";
import { TypeNewsFields, TypePageFields, TypeMicrocopyFields } from "../generated/contentful";
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
) => getAllEntries<TypeNewsFields>(query, getNewsEntries);

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
) => getAllEntries<TypePageFields>(query, getPageEntries);

export const getPage: GetEntry<TypePageFields> = async (id, query = {}) =>
  client.withoutUnresolvableLinks.getEntry<TypePageFields>(id, {
    ...query,
  });

export const getCustomPageAndMicrocopy = async (pageId: string) =>
  client.withoutUnresolvableLinks.getEntries<TypeMicrocopyFields>({
    "fields.containingPage.sys.id": pageId,
    content_type: ContentModels.Microcopy,
    limit: 1000,
  })

export const getAllEntries = async <Fields extends {}>(
  query: EntriesQueries<Fields> = {},
  callback: GetEntries<Fields>
): Promise<EntryWithLinkResolutionAndWithoutUnresolvableLinks<Fields>[]> => {
  let items: EntryWithLinkResolutionAndWithoutUnresolvableLinks<Fields>[] = [];
  let isDone = false;
  let skip: number | undefined = undefined;
  while (!isDone) {
    let res = await callback({
      ...query,
      skip,
    });
    skip = res.skip + res.limit;
    items = items.concat(res.items);
    if (res.skip + res.limit >= res.total) {
      isDone = true;
    }
  }

  return items;
};
