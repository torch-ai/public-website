import * as CFRichTextTypes from "@contentful/rich-text-types";
import * as Contentful from "contentful";

export interface TypeNewsFields {
    title: Contentful.EntryFields.Symbol;
    slug: Contentful.EntryFields.Symbol;
    content: CFRichTextTypes.Block | CFRichTextTypes.Inline;
    publishDate: Contentful.EntryFields.Date;
    Thumbnail: Contentful.Asset;
    fullSizeImage?: Contentful.Asset;
    summary: Contentful.EntryFields.Symbol;
    tags: Contentful.EntryFields.Symbol[];
}

export type TypeNews = Contentful.Entry<TypeNewsFields>;
