import * as CFRichTextTypes from "@contentful/rich-text-types";
import * as Contentful from "contentful";

export interface TypeBlogPostFields {
    title: Contentful.EntryFields.Symbol;
    slug: Contentful.EntryFields.Symbol;
    content: CFRichTextTypes.Block | CFRichTextTypes.Inline;
    publishDate: Contentful.EntryFields.Date;
    Thumbnail: Contentful.Asset;
    fullSizeImage?: Contentful.Asset;
    summary: Contentful.EntryFields.Symbol;
    tags: Contentful.EntryFields.Symbol[];
    author: Contentful.Entry<Record<string, any>>;
}

export type TypeBlogPost = Contentful.Entry<TypeBlogPostFields>;
