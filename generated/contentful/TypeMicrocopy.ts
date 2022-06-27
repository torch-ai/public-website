import * as Contentful from "contentful";
import { TypeCustomPageFields } from "./TypeCustomPage";

export interface TypeMicrocopyFields {
    containingPage: Contentful.Entry<TypeCustomPageFields>;
    description: Contentful.EntryFields.Symbol;
    searchable: Contentful.EntryFields.Boolean;
    content: Contentful.EntryFields.Text;
}

export type TypeMicrocopy = Contentful.Entry<TypeMicrocopyFields>;
