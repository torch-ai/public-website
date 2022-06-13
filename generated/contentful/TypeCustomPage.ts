import * as Contentful from "contentful";

export interface TypeCustomPageFields {
    title: Contentful.EntryFields.Symbol;
    pageHeadTitle: Contentful.EntryFields.Symbol[];
    pagePath: Contentful.EntryFields.Symbol;
}

export type TypeCustomPage = Contentful.Entry<TypeCustomPageFields>;
