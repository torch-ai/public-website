import React from "react";
import Static from "../styles/modules/static.module.scss";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";
import * as CFRichTextTypes from "@contentful/rich-text-types";

interface Props {
  content:
    | CFRichTextTypes.Block
    | CFRichTextTypes.Inline
    | CFRichTextTypes.Document;
}
const ContentfulContent: React.FunctionComponent<Props> = ({ content }) => {
  return (
    <div className={`${Static["content"]} flow`}>
      {documentToReactComponents(content as Document)}
    </div>
  );
};
export default ContentfulContent;
