// noinspection JSUnusedGlobalSymbols

import React from "react";
import Image from "next/image";
import { Asset } from "contentful";

interface Props {
  asset: Asset;
}
const ContentfulImage: React.FunctionComponent<Props> = ({ asset }) => (
  <Image
    src={["https:", asset.fields.file.url].join("")}
    width={asset.fields.file.details.image.width}
    height={asset.fields.file.details.image.height}
    alt={asset.fields.description || undefined}
  />
);

export default ContentfulImage;
