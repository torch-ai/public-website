import React, { FunctionComponent } from "react";
import NewsItem from "./NewsItem";
import { TypeNews } from "../../generated/contentful";
import Style from "./styles.module.scss";

export interface NewsGridProps {
  news: TypeNews[];
  title?: string;
}

const NewsGrid: FunctionComponent<
  NewsGridProps & React.HTMLAttributes<HTMLDivElement>
> = ({ news, title = null, ...props }) => {
  return (
    <div {...props}>
      {title && (
        <div className={Style.newsTitle}>
          <h3>{title}</h3>
        </div>
      )}
      <div className={Style.newsLayout}>
        {news.map((n) => (
          <NewsItem key={n.sys.id} newsItem={n} />
        ))}
      </div>
    </div>
  );
};

export default NewsGrid;
