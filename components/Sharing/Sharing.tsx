import React, { FunctionComponent, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Style from "./styles.module.scss";
import { faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

export interface SharingProps {
  postText: string;
  url: string;
}

const Sharing: FunctionComponent<SharingProps> = ({ postText, url }) => {
  const [copied, setCopied] = useState(false);

  return (
    <div className={Style.sharingContainer}>
      <p>Share: </p>
      <FontAwesomeIcon
        icon={faTwitter}
        title="Share on Twitter"
        className={Style.sharingButton}
        onClick={() => {
          window.open(
            `https://twitter.com/intent/tweet?text=${encodeURIComponent(
              postText
            )}&url=${encodeURIComponent(url)}`,
            "Share this Page",
            `width=650,height=350,left=${
              window.screenX + (window.innerWidth - 650) / 2
            },top=${window.screenY + (window.innerHeight - 350) / 2}`
          );
        }}
      />
      <FontAwesomeIcon
        icon={faLinkedin}
        title="Share on Linkedin"
        className={Style.sharingButton}
        onClick={() => {
          window.open(
            `https://linkedin.com/sharing/share-offsite?url=${encodeURIComponent(
              url
            )}`,
            "Share this Page",
            `width=650,height=500,left=${
              window.screenX + (window.innerWidth - 650) / 2
            },top=${window.screenY + (window.innerHeight - 350) / 2}`
          );
        }}
      />
      <FontAwesomeIcon
        icon={faLink}
        title="Copy Page URL"
        className={Style.sharingButton}
        onClick={async () => {
          await navigator.clipboard.writeText(url);
          setCopied(true);
          setTimeout(() => {
            setCopied(false);
          }, 2000);
        }}
      />
      {copied && <p className={Style.fadeIn}>&nbsp;Copied!</p>}
    </div>
  );
};

export default Sharing;
