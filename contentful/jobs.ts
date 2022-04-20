import { Entry } from "contentful";

export type JobsEntry = Entry<{
  title: string;
  location: string;
  publishDate: string;
  jobDescription: string;
  url: string;
}>;
