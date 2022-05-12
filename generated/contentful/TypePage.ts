import * as CFRichTextTypes from "@contentful/rich-text-types";
import * as Contentful from "contentful";

export interface TypePageFields {
    title: Contentful.EntryFields.Symbol;
    subtitle?: Contentful.EntryFields.Symbol;
    slug?: Contentful.EntryFields.Symbol;
    integrationDetails?: Contentful.EntryFields.Symbol;
    hasSections?: Contentful.EntryFields.Boolean;
    headerBackgroundColor?: Contentful.EntryFields.Symbol;
    headerBackgroundImage?: Contentful.Asset;
    isHeaderBackgroundColorSchemaLight?: Contentful.EntryFields.Boolean;
    headerImage?: Contentful.Asset;
    content?: CFRichTextTypes.Block | CFRichTextTypes.Inline;
    aside?: CFRichTextTypes.Block | CFRichTextTypes.Inline;
}

export type TypePage = Contentful.Entry<TypePageFields>;
