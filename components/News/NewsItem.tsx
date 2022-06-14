import React, { FunctionComponent } from "react";
import Link from "next/link";
import { TypeNews } from "../../generated/contentful";
import Image from "next/image";
import Style from "./styles.module.scss";

export interface NewsItemProps {
  newsItem: TypeNews;
}

const NewsItem: FunctionComponent<
  NewsItemProps & React.HTMLAttributes<HTMLDivElement>
> = ({ newsItem, ...props }) => {
  return (
    <>
      <div {...props} className={clsx(Style.newsLayoutItem, props.className)}>
        <Image
          src={"http:" + newsItem.fields.fullSizeImage.fields.file.url}
          layout="fill"
          objectFit={"cover"}
          alt={newsItem.fields.fullSizeImage.fields.description || ""}
        />
        <div className={Style.newsLayoutItemContent}>
          <p>
            {new Date(newsItem.fields.publishDate).toLocaleString("en-US", {
              dateStyle: "long",
            })}
          </p>
          <h5>{newsItem.fields.title}</h5>
          <Link href={"/post/" + newsItem.fields.slug}>
            <a>Read More</a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NewsItem;
