import * as Contentful from "contentful";

export interface TypeCareerPostingFields {
    title: Contentful.EntryFields.Symbol;
    slug: Contentful.EntryFields.Symbol;
    publishDate: Contentful.EntryFields.Date;
    tags: Contentful.EntryFields.Symbol[];
    url?: Contentful.EntryFields.Symbol;
    active: Contentful.EntryFields.Boolean;
    location: Contentful.EntryFields.Symbol;
    remote: Contentful.EntryFields.Boolean;
    division: Contentful.EntryFields.Boolean;
    jobDescription: Contentful.EntryFields.Text;
}

export type TypeCareerPosting = Contentful.Entry<TypeCareerPostingFields>;
