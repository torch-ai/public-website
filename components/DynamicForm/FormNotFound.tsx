import React from "react";

interface Props {
  formId: string;
}
const FormNotFound: React.FunctionComponent<Props> = ({ formId }) => (
  <p>
    Form not found: <code>{formId}</code>
  </p>
);
export default FormNotFound;
