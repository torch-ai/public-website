import * as CFRichTextTypes from "@contentful/rich-text-types";
import * as Contentful from "contentful";
import { TypePageFields } from "./TypePage";

export interface TypePageSectionFields {
    title: Contentful.EntryFields.Symbol;
    parent: Contentful.Entry<TypePageFields>;
    weight: Contentful.EntryFields.Number;
    content: CFRichTextTypes.Block | CFRichTextTypes.Inline;
}

export type TypePageSection = Contentful.Entry<TypePageSectionFields>;
