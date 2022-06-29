import { ReactElement, useState, useEffect } from "react";
import router from "next/router";
import Style from "./styles.module.scss";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import { getHeadPageTitle } from "../../utils/meta";
import { searchEntries, SearchEntriesResult } from "../../contentful/client";
import PageHeader from "../../components/PageHeader/PageHeader";
import Container from "../../components/Container/Container";
import PageTitle from "../../components/PageTitle/PageTitle";
import PageSubtitle from "../../components/PageSubtitle/PageSubtitle";
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

  const onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") {
      router.push(`/search?q=${encodeURIComponent(searchText)}`);
      setIsLoading(true);
    }
  };

  useEffect(() => {
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
      <PageHeader>
        <PageTitle>Search Results</PageTitle>
        <PageSubtitle>
          Showing {items.length} results for "{search}"
        </PageSubtitle>
      </PageHeader>
      <ScrollToTop scrollType="window" />
      <Container>
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
        <div className={Style.searchResultsContainer}>
          {items.map((result) => {
            return <SearchResult key={result.id} item={result} />;
          })}
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default SearchResults;
