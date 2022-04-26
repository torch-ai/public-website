import React from "react";
import dynamic from "next/dynamic";
import FormNotFound from "./FormNotFound";

interface Props {
  formId?: string;
}
const DynamicForm: React.FunctionComponent<Props> = ({ formId }) => {
  if (!formId) {
    return <p>Form id not defined</p>;
  }

  try {
    const DynamicComponent = dynamic(() => import(`./${formId}`));
    return <DynamicComponent />;
  } catch (err) {
    return <FormNotFound formId={formId} />;
  }
};
export default DynamicForm;
