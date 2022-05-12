import {
  createClient,
  EntryCollectionWithLinkResolutionAndWithoutUnresolvableLinks,
  EntriesQueries,
} from "contentful";
import { TypeNewsFields, TypePageFields } from "../generated/contentful";
import { EntryWithoutLinkResolution } from "contentful/lib/types/entry";

// Trying very hard not to expose the raw client to get good utility functions.
const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

enum ContentModels {
  News = "news",
  Page = "page",
}

type GetEntries<Fields> = (
  query: EntriesQueries<Fields>
) => Promise<
  EntryCollectionWithLinkResolutionAndWithoutUnresolvableLinks<Fields>
>;

type GetEntry<Fields> = (
  id: string,
  query: EntriesQueries<Fields>
) => Promise<EntryWithoutLinkResolution<Fields>>;

export const getNewsEntries: GetEntries<TypeNewsFields> = async (query = {}) =>
  client.withoutUnresolvableLinks.getEntries<TypeNewsFields>({
    ...query,
    content_type: ContentModels.News,
  });

export const getNewsEntry: GetEntry<TypeNewsFields> = async (id, query = {}) =>
  client.withoutUnresolvableLinks.getEntry<TypeNewsFields>(id, {
    ...query,
  });

export const getPage: GetEntry<TypePageFields> = async (id, query = {}) =>
  client.withoutUnresolvableLinks.getEntry<TypePageFields>(id, {
    ...query,
  });
