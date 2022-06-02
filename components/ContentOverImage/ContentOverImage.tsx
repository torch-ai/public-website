import React from "react";
import clsx from "clsx";
import { ImageProps } from "next/dist/client/image";
import Style from "./styles.module.scss";
import Image from "next/image";

interface Props {
  imageProps: ImageProps;
  contentProps?: React.HTMLAttributes<HTMLDivElement>;
}
const ContentOverImage: React.FunctionComponent<
  Props & React.HTMLAttributes<HTMLDivElement>
> = ({ className, children, imageProps, contentProps, ...props }) => {
  const objectPosition: ImageProps["objectPosition"] =
    imageProps.objectPosition || "right bottom";
  const isObjectRightAligned: boolean =
    objectPosition === "right" ||
    (typeof objectPosition === "string" && objectPosition.includes("right"));
  return (
    <section {...props} className={clsx(Style.section, className)}>
      <div
        {...contentProps}
        className={clsx(Style.content, contentProps.className)}
      >
        {children}
      </div>
      <div
        className={clsx(Style.background, {
          [Style.backgroundRight]: isObjectRightAligned,
        })}
      >
        <Image
          layout={"fill"}
          objectFit={"contain"}
          objectPosition={objectPosition}
          {...imageProps}
        />
      </div>
    </section>
  );
};

export default ContentOverImage;
