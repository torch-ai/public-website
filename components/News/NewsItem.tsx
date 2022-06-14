import React, { FunctionComponent } from "react";
import Link from "next/link";
import { TypeNews } from "../../generated/contentful";
import Image from "next/image";
import Style from "./styles.module.scss";
import clsx from "clsx";

export interface NewsItemProps {
  newsItem: TypeNews;
  className?: string;
}

const NewsItem: FunctionComponent<NewsItemProps> = ({
  newsItem,
  className = "",
}) => {
  return (
    <>
      <div className={clsx(Style.newsLayoutItem, className)}>
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
