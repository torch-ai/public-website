import { createClient, Entry, EntryCollection, Sys } from "contentful";
import {
  TypeCareerPostingFields,
  TypeNewsFields,
  TypePage,
  TypePageFields,
} from "../generated/contentful";

// Trying very hard not to expose the raw client to get good utility functions.
const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

type QueryFields<T> = {
  [P in keyof T & string as `fields.${P}`]?: T[P];
};

type GetEntries<T> = (
  query?: Record<string, any> & {
    limit?: number;
    skip?: number;
    /** You can reverse the sort order by prefixing the field with a - symbol. */
    order?:
      | Pick<
          Sys,
          "type" | "id" | "createdAt" | "updatedAt" | "locale" | "revision"
        >
      | QueryFields<T>
      | string;
  } & QueryFields<T>
) => Promise<EntryCollection<T>>;

type GetEntry<T> = (
  id: string,
  query?: Record<string, any> & {} & QueryFields<T>
) => Promise<Entry<T>>;

enum ContentModels {
  CareerPosting = "careerPosting",
  News = "news",
  Page = "page",
  PageSection = "pageSection",
}

export const getCareerPostingsEntries: GetEntries<
  TypeCareerPostingFields
> = async (query = {}) =>
  client.getEntries<TypeCareerPostingFields>({
    ...query,
    content_type: ContentModels.CareerPosting,
  });

export const getNewsEntries: GetEntries<TypeNewsFields> = async (query = {}) =>
  client.getEntries<TypeNewsFields>({
    ...query,
    content_type: ContentModels.News,
  });

// export const getNewsEntry: GetEntry<TypeNewsFields> = async (id, query = {}) =>
//   client.getEntry<TypeNewsFields>(id, {
//     ...query,
//   });

export const getPageEntries: GetEntries<TypePageFields> = async (
  id,
  query = {}
) =>
  client.getEntries<TypePageFields>({
    ...query,
    content_type: ContentModels.News,
  });

export const getPageEntry: GetEntry<TypePageFields> = async (id, query = {}) =>
  client.getEntry<TypePageFields>(id, {
    ...query,
  });
