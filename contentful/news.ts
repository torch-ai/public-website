import { Asset, Entry } from "contentful";

export type NewsEntry = Entry<{
  fullSizeImage: Asset;
  title: string;
  slug: string;
}>;
