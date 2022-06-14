import React, { FunctionComponent } from "react";
import NewsItem from "./NewsItem";
import { TypeNews } from "../../generated/contentful";
import Style from "./styles.module.scss";
import clsx from "clsx";

export interface NewsGridProps {
  news: TypeNews[];
  title?: string;
  className?: string;
}

const NewsGrid: FunctionComponent<NewsGridProps> = ({
  news,
  title = null,
  className = "",
}) => {
  return (
    <>
      {!!title && (
        <div className={Style.newsTitle}>
          <h3>{title}</h3>
        </div>
      )}
      <div className={clsx(Style.newsLayout, className)}>
        {news.map((n) => (
          <NewsItem newsItem={n} />
        ))}
      </div>
    </>
  );
};

export default NewsGrid;
