// noinspection JSUnusedGlobalSymbols

import React from "react";
import Image from "next/image";
import { Asset } from "contentful";
import ContentfulImage from "./components/ContentfulImage/ContentfulImage";

interface Props {
  asset: Asset;
}
const Header: React.FunctionComponent<Props> = ({ asset }) => {
  console.info(asset);
  return (
    <>
      {asset.fields.file.details.image ? (
        <ContentfulImage asset={asset} />
      ) : (
        <p>Unhandled asset type: {asset.fields.file.contentType}</p>
      )}
    </>
  );
};

export default Header;
