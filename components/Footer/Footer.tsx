import Grid from "../Grid/Grid";
import Style from "./styles.module.scss";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import logo from "../../img/logo.svg";
import forbes from "../../img/forbes.png";
import { faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { pageSettings as termsOfServicePageSettings } from "../../pages/termsofservice";
import { pageSettings as privacyPolicyPageSettings } from "../../pages/privacypolicy";
import { pageSettings as legalPageSettings } from "../../pages/legal";
import { pageSettings as careersPageSettings } from "../../pages/careers";
import { pageSettings as newsroomPageSettings } from "../../pages/newsroom";
import clsx from "clsx";

const Footer: React.FunctionComponent = () => {
  return (
    <footer id="contact" className={clsx(Style.footer, "section")}>
      <Grid container marginCenter row className={Style.footerTitle}>
        <h3>Get in Touch With Us.</h3>
      </Grid>
      <Grid
        container
        marginCenter
        row
        className={clsx(Style.gap, Style.footerContent)}
      >
        <div className={clsx(Style.footerFormContainer, "flow")}>
          <div className={clsx(Style.footerText)}>
            <p>Find out how Nexus can unlock your productivity.</p>
          </div>

          <form
            action="https://formspree.io/f/mvolablv"
            method="POST"
            className={clsx(Style.footerForm, "flow")}
          >
            <Grid row nowrap>
              <input
                placeholder="Full name"
                id="name"
                type="text"
                autoComplete="name"
                name="name"
                required
              />
            </Grid>
            <Grid row nowrap>
              <input
                placeholder="Index"
                id="organization"
                type="text"
                autoComplete="organization"
                name="company"
              />

              <input
                placeholder="Email address"
                id="name"
                type="email"
                autoComplete="email"
                name="email"
                required
              />
            </Grid>
            <Grid
              row
              className={clsx(Style.footerFormSubmit, Style.gap, "flow")}
            >
              <button className={clsx(Style.footerFormButton)} type="submit">
                Send
              </button>
              <Grid row className={Style.socialIcons}>
                <a
                  href="https://www.linkedin.com/company/torchai"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
                </a>
                <a
                  href="https://twitter.com/torch_ai"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
              </Grid>
            </Grid>
          </form>
        </div>

        <div className={clsx(Style.footerTerms)}>
          <ul>
            <li>
              <Link href={newsroomPageSettings.path}>
                <a>{newsroomPageSettings.linkContent}</a>
              </Link>
            </li>
            <li>
              <Link href={termsOfServicePageSettings.path}>
                <a>{termsOfServicePageSettings.linkContent}</a>
              </Link>
            </li>
            <li>
              <Link href={privacyPolicyPageSettings.path}>
                <a>{privacyPolicyPageSettings.linkContent}</a>
              </Link>
            </li>
            <li>
              <Link href={legalPageSettings.path}>
                <a>{legalPageSettings.linkContent}</a>
              </Link>
            </li>
            <li>
              <Link href={careersPageSettings.path}>
                <a>{careersPageSettings.linkContent}</a>
              </Link>
            </li>
          </ul>
        </div>

        <div className={clsx(Style.footerAddress)}>
          <ul>
            <li>5250 W 116TH Pl Suite 200</li>
            <li>Leawood, KS, 66211</li>
            <li>+1 (202) 570-7169</li>
            <li>
              <a href="https://www.forbes.com/lists/americas-best-startup-employers/?">
                <Image
                  src={forbes}
                  alt={
                    "Recognized by Forbes as one of America's best startups employers for 2022"
                  }
                />
              </a>
            </li>
          </ul>
        </div>
      </Grid>

      <Grid
        container
        marginCenter
        row
        spacing={{ Xs: "between" }}
        className={Style.footerCopy}
      >
        <Image
          className={clsx(Style.logo)}
          src={logo}
          alt="The logo of Torch.ai"
        />
        <p>Copyright &copy; 2022 Torch.AI</p>
      </Grid>
    </footer>
  );
};

export default Footer;
