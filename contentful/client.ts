import {
  createClient,
  EntriesQueries,
  Entry,
  EntryCollection,
} from "contentful";
import {
  TypeCareerPostingFields,
  TypeNewsFields,
  TypePage,
  TypePageFields,
} from "../generated/contentful";
import { EntryCollectionWithLinkResolutionAndWithoutUnresolvableLinks } from "contentful/lib/types/entry";

// Trying very hard not to expose the raw client to get good utility functions.
const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

enum ContentModels {
  CareerPosting = "careerPosting",
  News = "news",
}

export const getCareerPostingsEntries: EntryCollectionWithLinkResolutionAndWithoutUnresolvableLinks<
  TypeNewsFields
> = async (query: EntriesQueries<TypeCareerPostingFields>) =>
  client.withoutUnresolvableLinks.getEntries<TypeCareerPostingFields>({
    ...query,
    content_type: ContentModels.CareerPosting,
  });

export const getNewsEntries: GetEntries<TypeNewsFields> = async (query = {}) =>
  client.withoutUnresolvableLinks.getEntries<TypeNewsFields>({
    ...query,
    content_type: ContentModels.News,
  });

// export const getNewsEntry: GetEntry<TypeNewsFields> = async (id, query = {}) =>
//   client.getEntry<TypeNewsFields>(id, {
//     ...query,
//   });

export const getPage: GetEntry<TypePageFields> = async (id, query = {}) =>
  client.withoutUnresolvableLinks.getEntry<TypePageFields>(id, {
    ...query,
  });
