// noinspection JSUnusedGlobalSymbols

import React from "react";
import { Asset } from "contentful";
import Styles from "./styles.module.scss";

interface Props {
  asset: Asset;
}
const ContentfulVideo: React.FunctionComponent<Props> = ({ asset }) => (
  <video
    title={asset.fields.title}
    className={Styles.video}
    controls
    poster="/torch-video-poster.jpg"
  >
    <source src={asset.fields.file.url} type={asset.fields.file.contentType} />
  </video>
);

export default ContentfulVideo;
