import { FunctionComponent, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faX,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
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
  const [isLoading, setIsLoading] = useState(false);

  const onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") {
      router.push(`/search?q=${encodeURIComponent(searchText)}`);
      setIsLoading(true);
    }
  };

  useEffect(() => {
    router.events.on("routeChangeComplete", () => {
      setSearchOpen(false);
      setSearchText("");
      setIsLoading(false);
    });
  }, []);

  if (searchOpen) {
    return (
      <div className={clsx(Styles.searchBar)}>
        <input
          autoFocus
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          disabled={isLoading}
          onKeyUp={onKeyUp}
        />
        <FontAwesomeIcon
          icon={isLoading ? faSpinner : faX}
          className={clsx(Styles.icon, Styles.closeBtn, {
            [Styles.spinning]: isLoading,
          })}
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
