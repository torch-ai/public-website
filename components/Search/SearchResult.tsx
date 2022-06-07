import { FunctionComponent } from "react";
import { TypeNews } from "../../generated/contentful/TypeNews";
import { TypePage } from "../../generated/contentful/TypePage";
import Styles from "./styles.module.scss";
import Link from "next/link";

interface SearchResultProps {
  item: TypeNews | TypePage;
}

const SearchResult: FunctionComponent<SearchResultProps> = ({ item }) => {
  let imageUrl: string;
  let publishedDate: string;
  let href: string;
  let preview: string;
  if (item.sys.contentType.sys.id == "news") {
    let newsItem = item as TypeNews;
    imageUrl = newsItem.fields.Thumbnail.fields.file.url;
    publishedDate = new Date(newsItem.fields.publishDate).toLocaleString(
      "en-US",
      { dateStyle: "long" }
    );
    href = "/post/" + newsItem.fields.slug;
    preview = newsItem.fields.summary;
  } else if (item.sys.contentType.sys.id == "page") {
    let pageItem = item as TypePage;
    imageUrl = pageItem.fields.headerImage.fields.file.url;
    publishedDate = "";
    href = "/page/" + pageItem.fields.slug;
    preview = pageItem.fields.subtitle;
  }

  return (
    <div className={Styles.searchResult}>
      <img src={"https:" + imageUrl} />
      <div className={Styles.resultPreview}>
        <p>{publishedDate}</p>
        <Link href={href}>
          <h5>{item.fields.title}</h5>
        </Link>
        <p>{preview}</p>
      </div>
    </div>
  );
};

export default SearchResult;
