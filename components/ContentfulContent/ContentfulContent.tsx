import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";
import * as CFRichTextTypes from "@contentful/rich-text-types";
import clsx from "clsx";
import Prose from "../Prose/Prose";

interface Props {
  content:
    | CFRichTextTypes.Block
    | CFRichTextTypes.Inline
    | CFRichTextTypes.Document;
}
const ContentfulContent: React.FunctionComponent<
  Props & React.HTMLAttributes<HTMLDivElement>
> = ({ content, ...props }) => {
  return (
    <Prose {...props} className={clsx(props.className)}>
      {documentToReactComponents(content as Document)}
    </Prose>
  );
};
export default ContentfulContent;
