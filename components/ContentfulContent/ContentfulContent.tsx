import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";
import * as CFRichTextTypes from "@contentful/rich-text-types";
import ReadabilityConstraints from "../ReadabilityConstraints/ReadabilityConstraints";

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
    <ReadabilityConstraints
      {...props}
      className={["flow", props.className].filter(Boolean).join(" ")}
    >
      {documentToReactComponents(content as Document)}
    </ReadabilityConstraints>
  );
};
export default ContentfulContent;
