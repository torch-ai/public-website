import React from "react";
import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import { Block, Inline, Document, BLOCKS } from "@contentful/rich-text-types";
import clsx from "clsx";
import Prose from "../Prose/Prose";
import ContentfulAsset from "../ContentfulAsset/ContentfulAsset";

interface Props {
  content: Block | Inline | Document;
}

const ContentfulContent: React.FunctionComponent<
  Props & React.HTMLAttributes<HTMLDivElement>
> = ({ content, ...props }) => {
  const renderOptions = getRenderOptions();

  return (
    <Prose {...props} className={clsx(props.className)}>
      {documentToReactComponents(content as Document, renderOptions)}
    </Prose>
  );
};
export default ContentfulContent;

const getRenderOptions = (): Options => ({
  // https://www.contentful.com/blog/2021/04/14/rendering-linked-assets-entries-in-contentful/
  renderNode: {
    // Create a bespoke renderOptions object to target BLOCKS.EMBEDDED_ENTRY (linked block entries e.g. code blocks)
    // [INLINES.EMBEDDED_ENTRY]: (node) => {
    //   // target the contentType of the EMBEDDED_ENTRY to display as you need
    //   if (node.data.target.sys.contentType.sys.id === "blogPost") {
    //     return (
    //       <a href={`/blog/${node.data.target.fields.slug}`}>
    //         {" "}
    //         {node.data.target.fields.title}
    //       </a>
    //     );
    //   }
    // },
    // INLINES.EMBEDDED_ENTRY (linked inline entries e.g. a reference to another blog post)
    // [BLOCKS.EMBEDDED_ENTRY]: (node) => {
    //   // target the contentType of the EMBEDDED_ENTRY to display as you need
    //   if (node.data.target.sys.contentType.sys.id === "codeBlock") {
    //     return (
    //       <pre>
    //         <code>{node.data.target.fields.code}</code>
    //       </pre>
    //     );
    //   }
    //
    //   if (node.data.target.sys.contentType.sys.id === "videoEmbed") {
    //     return (
    //       <iframe
    //         src={node.data.target.fields.embedUrl}
    //         height="100%"
    //         width="100%"
    //         frameBorder="0"
    //         scrolling="no"
    //         title={node.data.target.fields.title}
    //         allowFullScreen={true}
    //       />
    //     );
    //   }
    // },
    // BLOCKS.EMBEDDED_ASSET (linked assets e.g. images)
    [BLOCKS.EMBEDDED_ASSET]: (node) => (
      <ContentfulAsset asset={node.data.target} />
    ),
  },
});
