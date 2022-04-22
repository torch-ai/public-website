import * as CFRichTextTypes from "@contentful/rich-text-types";
import * as Contentful from "contentful";

export interface TypePageFields {
    title: Contentful.EntryFields.Symbol;
    subtitle?: Contentful.EntryFields.Symbol;
    hasSections?: Contentful.EntryFields.Boolean;
    content?: CFRichTextTypes.Block | CFRichTextTypes.Inline;
}

export type TypePage = Contentful.Entry<TypePageFields>;
