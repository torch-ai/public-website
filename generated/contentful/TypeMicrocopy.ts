import * as CFRichTextTypes from "@contentful/rich-text-types";
import * as Contentful from "contentful";
import { TypeCustomPageFields } from "./TypeCustomPage";

export interface TypeMicrocopyFields {
    containingPage: Contentful.Entry<TypeCustomPageFields>;
    description: Contentful.EntryFields.Symbol;
    searchable: Contentful.EntryFields.Boolean;
    content: CFRichTextTypes.Block | CFRichTextTypes.Inline;
}

export type TypeMicrocopy = Contentful.Entry<TypeMicrocopyFields>;
