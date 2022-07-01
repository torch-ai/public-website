import { ReactElement, useState, useEffect, useContext } from "react";
import router from "next/router";
import Style from "./styles.module.scss";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import { getHeadPageTitle } from "../../utils/meta";
import { searchEntries, SearchEntriesResult } from "../../contentful/client";
import Container from "../../components/Container/Container";
import LayoutContext from "../../components/layout/LayoutContext";
import Footer from "../../components/Footer/Footer";
import SearchResult from "../../components/Search/SearchResult";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

export const getServerSideProps: GetServerSideProps<{
  items: SearchEntriesResult[];
  search: string;
}> = async ({ query }) => {
  let search = query.q as string;
  let results = await searchEntries(search);

  return {
    props: {
      items: results.results,
      search: search ? search : null,
    },
  };
};

const SearchResults = ({
  items,
  search,
}: InferGetServerSidePropsType<typeof getServerSideProps>): ReactElement => {
  const [searchText, setSearchText] = useState(search);
  const [isLoading, setIsLoading] = useState(false);
  const { setNavColor } = useContext(LayoutContext);

  const onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") {
      router.push(`/search?q=${encodeURIComponent(searchText)}`);
      setIsLoading(true);
    }
  };

  useEffect(() => {
    setNavColor("black");
    router.events.on("routeChangeComplete", () => {
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <Head>
        <title>
          {getHeadPageTitle([
            "World's most trusted AI platform",
            "Unlock human potential",
          ])}
        </title>
      </Head>
      <ScrollToTop scrollType="window" />
      <Container className={Style.serp}>
        <div className={Style.searchBar}>
          <FontAwesomeIcon
            icon={isLoading ? faSpinner : faMagnifyingGlass}
            className={clsx({
              [Style.spinning]: isLoading,
            })}
          />
          <input
            placeholder="Search"
            value={searchText}
            onKeyUp={onKeyUp}
            disabled={isLoading}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
        </div>
        <div>
          {items.length > 0 ? (
            items.map((result) => {
              return <SearchResult key={result.id} item={result} />;
            })
          ) : (
            <p className={Style.noResultFound}>No results found.</p>
          )}
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default SearchResults;
