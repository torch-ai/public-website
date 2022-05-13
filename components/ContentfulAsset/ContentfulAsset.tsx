// noinspection JSUnusedGlobalSymbols

import React from "react";
import { Asset } from "contentful";
import ContentfulImage from "./components/ContentfulImage/ContentfulImage";
import ContentfulVideo from "./components/ContentfulVideo/ContentfulVideo";
import Styles from "./styles.module.scss";

interface Props {
  asset: Asset;
}
const Header: React.FunctionComponent<Props> = ({ asset }) => {
  const isImage = asset.fields.file.details.image;
  const isVideo = !isImage && asset.fields.file.contentType.match(/video/);
  const isUnknown = !(isImage || isVideo);

  return (
    <div className={Styles.wrapper}>
      {isImage && <ContentfulImage asset={asset} />}
      {isVideo && <ContentfulVideo asset={asset} />}
      {isUnknown && (
        <p>
          Unhandled asset:{" "}
          <pre>
            <code>{JSON.stringify(asset)}</code>
          </pre>
        </p>
      )}
    </div>
  );
};

export default Header;
