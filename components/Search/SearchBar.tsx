import { FunctionComponent, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faX } from "@fortawesome/free-solid-svg-icons";
import { NextRouter } from "next/router";
import Styles from "./styles.module.scss";
import clsx from "clsx";

interface SearchBarProps {
  isLightColorScheme: boolean;
  router: NextRouter;
}
const SearchBar: FunctionComponent<SearchBarProps> = ({
  isLightColorScheme,
  router,
}) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState("");

  const onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") {
      router.push(`/search?q=${encodeURIComponent(searchText)}`);
      setSearchOpen(false);
      setSearchText("");
    }
  };

  if (searchOpen) {
    return (
      <div
        className={clsx(Styles.searchBar, {
          [Styles.isLightColorScheme]: isLightColorScheme,
        })}
      >
        <input
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          onKeyUp={onKeyUp}
        />
        <FontAwesomeIcon
          icon={faX}
          className={Styles.icon}
          onClick={() => setSearchOpen(false)}
        />
      </div>
    );
  } else {
    return (
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className={Styles.icon}
        color={isLightColorScheme ? "black" : "white"}
        onClick={() => setSearchOpen(true)}
      />
    );
  }
};

export default SearchBar;
