// noinspection JSUnusedGlobalSymbols

import React from "react";
import Image from "next/image";
import { Asset } from "contentful";
import Styles from "./styles.module.scss";

interface Props {
  asset: Asset;
}
const ContentfulImage: React.FunctionComponent<Props> = ({ asset }) => {
  console.info(
    "ContentfulImage:",
    ["https://", asset.fields.file.url].join("")
  );
  return (
    <div className={Styles.wrapper}>
      <Image
        src={["https://", asset.fields.file.url].join("")}
        width={asset.fields.file.details.image.width}
        height={asset.fields.file.details.image.height}
        alt={asset.fields.description || undefined}
      />
    </div>
  );
};

export default ContentfulImage;
