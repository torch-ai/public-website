import { FunctionComponent } from "react";
import { TypeMicrocopy } from "../../generated/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";

export interface MicrocopyProps {
  id: string;
}

export const createMicrocopyComponent = (microcopy: TypeMicrocopy[]) => {
  const microcopyComponent: FunctionComponent<MicrocopyProps> = ({ id }) => {
    const content = microcopy.find((copy) => copy.sys.id == id).fields.content;
    return <>{documentToReactComponents(content as Document)}</>;
  };

  return microcopyComponent;
};
