import Grid from "../styles/modules/grid.module.scss";
import Template from "../styles/modules/template.module.scss";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import logo from "../img/logo.svg";
import forbes from "../img/forbes.png";
import { faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { pageSettings as termsOfServicePageSettings } from "../pages/termsofservice";
import { pageSettings as privacyPolicyPageSettings } from "../pages/privacypolicy";
import { pageSettings as legalPageSettings } from "../pages/legal";
import { pageSettings as careersPageSettings } from "../pages/careers";
import { pageSettings as newsroomPageSettings } from "../pages/newsroom";
import clsx from "clsx";

const Footer: React.FunctionComponent = () => {
  return (
    <footer id="contact" className={clsx(Template.footer, "section")}>
      <div
        className={clsx(
          Grid.marginCenter,
          Grid.container,
          Grid.row,
          Template.footerTitle
        )}
      >
        <h3>Get in Touch With Us.</h3>
      </div>
      <div
        className={clsx(
          Grid.marginCenter,
          Grid.container,
          Grid.row,
          Grid.gap,
          Template.footerContent
        )}
      >
        <div className={clsx(Template.footerFormContainer, "flow")}>
          <div className={clsx(Template.footerText)}>
            <p>Find out how Nexus can unlock your productivity.</p>
          </div>

          <form
            action="https://formspree.io/f/mvolablv"
            method="POST"
            className={clsx(Template.footerForm, "flow")}
          >
            <div className={clsx(Grid.rowWrapoff)}>
              <input
                placeholder="Full name"
                id="name"
                type="text"
                autoComplete="name"
                name="name"
                required
              />
            </div>
            <div className={clsx(Grid.rowWrapoff, "")}>
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
            </div>
            <div
              className={clsx(
                Template.footerFormSubmit,
                Grid.row,
                Grid.gap,
                "flow"
              )}
            >
              <button className={clsx(Template.footerFormButton)} type="submit">
                Send
              </button>
              <div className={clsx(Template.socialIcons, Grid.row, "")}>
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
              </div>
            </div>
          </form>
        </div>

        <div className={clsx(Template.footerTerms)}>
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

        <div className={clsx(Template.footerAddress)}>
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
      </div>

      <div
        className={clsx(
          Template.footerCopy,
          Grid.marginCenter,
          Grid.container,
          Grid.betweenXs,
          Grid.row
        )}
      >
        <Image
          className={clsx(Template.logo)}
          src={logo}
          alt="The logo of Torch.ai"
        />

        <p>Copyright &copy; 2022 Torch.AI</p>
      </div>
    </footer>
  );
};

export default Footer;
