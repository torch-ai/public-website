import { FunctionComponent } from "react";
import { SearchEntriesResult } from "../../contentful/client";
import Styles from "./styles.module.scss";
import Link from "next/link";

interface SearchResultProps {
  item: SearchEntriesResult;
}

const SearchResult: FunctionComponent<SearchResultProps> = ({ item }) => {
  return (
    <div className={Styles.searchResult}>
      <div className={Styles.resultPreview}>
        <p className={Styles.meta}>
          {item.type}{" "}
          {item.date && (
            <span>
              &#8226;{" "}
              {new Date(item.date).toLocaleString("en-US", {
                dateStyle: "long",
              })}
            </span>
          )}
        </p>
        <Link href={item.link}>
          <h5>{item.title}</h5>
        </Link>
        {item.preview && <p>{item.preview}</p>}
      </div>
    </div>
  );
};

export default SearchResult;
