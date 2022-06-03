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

const Footer: React.FunctionComponent = () => {
  return (
    <footer id="contact" className={`${Template.footer} section`}>
      <div
        className={`${Grid.margin_center} ${Grid.container} ${Grid.row}  ${Template.footer__title}`}
      >
        <h3>Get in Touch With Us.</h3>
      </div>
      <div
        className={`${Grid.margin_center} ${Grid.container} ${Grid.row} ${Grid["gap"]} ${Template.footer__content}`}
      >
        <div className={`${Template["footer__form-container"]} flow`}>
          <div className={`${Template.footer__text}`}>
            <p>Find out how Nexus can unlock your productivity.</p>
          </div>

          <form
            action="https://formspree.io/f/mvolablv"
            method="POST"
            className={`${Template["footer__form"]} flow`}
          >
            <div className={`${Grid.row_wrapoff}`}>
              <input
                placeholder="Full name"
                id="name"
                type="text"
                autoComplete="name"
                name="name"
                required
              />
            </div>
            <div className={`${Grid.row_wrapoff} `}>
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
              className={`${Template["footer__form-submit"]} ${Grid["row"]} ${Grid["gap"]} flow`}
            >
              <button
                className={`${Template["footer__form-button"]}`}
                type="submit"
              >
                Send
              </button>
              <div className={`${Template.socialIcons} ${Grid["row"]} `}>
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

        <div className={`${Template["footer__terms"]}`}>
          <ul>
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

        <div className={`${Template["footer__address"]}`}>
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
        className={`${Template["footer__copy"]} ${Grid.margin_center} ${Grid.container} ${Grid["between_xs"]} ${Grid.row}`}
      >
        <Image
          className={`${Template.logo}`}
          src={logo}
          alt="The logo of Torch.ai"
        />

        <p>Copyright &copy; 2022 Torch.AI</p>
      </div>
    </footer>
  );
};

export default Footer;
