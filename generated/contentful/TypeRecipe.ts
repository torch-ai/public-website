import * as CFRichTextTypes from "@contentful/rich-text-types";
import * as Contentful from "contentful";

export interface TypeRecipeFields {
    title: Contentful.EntryFields.Symbol;
    slug: Contentful.EntryFields.Symbol;
    thumnail: Contentful.Asset;
    featuredImage?: Contentful.Asset;
    ingredients: Contentful.EntryFields.Symbol[];
    cookingTime: Contentful.EntryFields.Integer;
    method: CFRichTextTypes.Block | CFRichTextTypes.Inline;
}

export type TypeRecipe = Contentful.Entry<TypeRecipeFields>;
