// noinspection JSUnusedGlobalSymbols

import React from "react";
import Styles from "./styles.module.scss";
import Card from "../../../../components/Card/Card";
import Link from "next/link";
import PrimaryButton from "../../../../components/PrimaryButton/PrimaryButton";
import { pageSettings as privacyPolicyPageSettings } from "../../../privacypolicy";

const Form: React.FunctionComponent = () => {
  return (
    <Card>
      <header className={Styles.header}>Download this study as a PDF</header>
      <form
        action="https://formspree.io/f/mvolwyny"
        method="POST"
        className={Styles.form}
      >
        <div className={Styles.row}>
          <label>
            <input type="text" name="name" placeholder="Full name" required />
          </label>
        </div>

        <div className={Styles.row}>
          <label>
            <input
              type="text"
              name="company-title"
              placeholder="Title"
              autoComplete="organization-title"
            />
          </label>
          <label>
            <input
              type="text"
              name="company"
              placeholder="Company"
              autoComplete="organization"
            />
          </label>
        </div>

        <div className={Styles.row}>
          <label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              autoComplete="email"
            />
          </label>
        </div>

        <p className={Styles.legal}>
          By submitting this form, you consent to be contacted by a member of
          our team by email or phone. You can unsubscribe from our
          communications at any time via the unsubscribe option in the email
          received. For more information on how Torch.AI uses your data, please
          refer to our{" "}
          <Link href={privacyPolicyPageSettings.path}>privacy policy</Link>.
        </p>
        <PrimaryButton isBlock type={"submit"}>
          Send
        </PrimaryButton>
      </form>
    </Card>
  );
};

export default Form;
