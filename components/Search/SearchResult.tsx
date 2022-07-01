import { FunctionComponent } from "react";
import { SearchEntriesResult } from "../../contentful/client";
import Styles from "./styles.module.scss";
import Link from "next/link";

interface SearchResultProps {
  item: SearchEntriesResult;
}

const SearchResult: FunctionComponent<SearchResultProps> = ({ item }) => {
  let previewText = item.preview;
  if (item.preview && item.preview.split(" ").length > 32) {
    previewText = item.preview.split(" ").splice(0, 32).join(" ") + "...";
  }

  return (
    <div className={Styles.searchResult}>
      <div className={Styles.resultPreview}>
        <p className={Styles.meta}>
          {item.type}{" "}
          {item.date && (
            <span>
              -{" "}
              {new Date(item.date).toLocaleString("en-US", {
                dateStyle: "long",
              })}
            </span>
          )}
        </p>
        <Link href={item.link}>
          <h5>{item.title}</h5>
        </Link>
        {previewText && <p>{previewText}</p>}
      </div>
    </div>
  );
};

export default SearchResult;
