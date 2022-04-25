// noinspection JSUnusedGlobalSymbols

import React from "react";
import Image from "next/image";
import { Asset } from "contentful";

interface Props {
  asset: Asset;
}
const Header: React.FunctionComponent<Props> = ({ asset }) => {
  return (
    <Image
      src={["https://", asset.fields.file.url].join("")}
      width={asset.fields.file.details.image.width}
      height={asset.fields.file.details.image.height}
      alt={"Title page of the Forrester economic impact report"}
    />
  );
};

export default Header;
