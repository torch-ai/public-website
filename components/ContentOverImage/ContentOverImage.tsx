import React from "react";
import clsx from "clsx";
import { ImageProps } from "next/dist/client/image";
import Style from "./styles.module.scss";
import Image from "next/image";

interface Props {
  imageProps: ImageProps;
  contentProps: React.HTMLAttributes<HTMLDivElement>;
}
const ContentOverImage: React.FunctionComponent<
  Props & React.HTMLAttributes<HTMLDivElement>
> = ({ className, children, imageProps, contentProps, ...props }) => {
  return (
    <section {...props} className={clsx(Style.section, "section", className)}>
      <div
        {...contentProps}
        className={clsx(Style.content, contentProps.className)}
      >
        {children}
      </div>
      <div className={Style.background}>
        <Image
          layout={"fill"}
          objectFit={"contain"}
          objectPosition={"right bottom"}
          {...imageProps}
          className={clsx(Style.cultureBackgroundImage, imageProps.className)}
        />
      </div>
    </section>
  );
};

export default ContentOverImage;
