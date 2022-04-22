import * as Contentful from "contentful";
import { TypePageFields } from "./TypePage";

export interface TypePageSectionFields {
    parent: Contentful.Entry<TypePageFields>;
    weight: Contentful.EntryFields.Number;
}

export type TypePageSection = Contentful.Entry<TypePageSectionFields>;
