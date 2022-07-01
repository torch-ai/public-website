import React, { FunctionComponent } from "react";
import router from "next/router";
import NewsItem from "./NewsItem";
import { TypeNews } from "../../generated/contentful";
import Style from "./styles.module.scss";
import Button from "../Button/Button";
import { pageSettings as newsroomPageSettings } from "../../pages/newsroom";

export interface NewsGridProps {
  news: TypeNews[];
  title?: string;
  showViewAllButton?: boolean;
}

const NewsGrid: FunctionComponent<
  NewsGridProps & React.HTMLAttributes<HTMLDivElement>
> = ({ news, title = null, showViewAllButton = false, ...props }) => {
  return (
    <>
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
      {showViewAllButton && (
        <Button
          style={{ display: "block" }}
          onClick={() => {
            router.push(newsroomPageSettings.path);
          }}
        >
          View all
        </Button>
      )}
    </>
  );
};

export default NewsGrid;
