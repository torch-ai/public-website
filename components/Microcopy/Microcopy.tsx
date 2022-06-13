import { FunctionComponent } from "react";
import { TypeMicrocopy } from "../../generated/contentful";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

export interface MicrocopyProps {
  entries: TypeMicrocopy[];
  id: string;
}

const Microcopy: FunctionComponent<MicrocopyProps> = ({ entries, id }) => {
  let microcopy = entries.find((entry) => entry.sys.id == id);

  if (microcopy) {
    return <>{microcopy.fields.content}</>;
  } else {
    return <FontAwesomeIcon icon={faTriangleExclamation} />;
  }
};

export default Microcopy;
