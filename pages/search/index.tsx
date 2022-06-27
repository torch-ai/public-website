import { ReactElement } from "react";
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

export const getServerSideProps: GetServerSideProps<{
  items: SearchEntriesResult[];
  search: string;
}> = async ({ query }) => {
  let search = query.q as string;
  let results = await searchEntries(search);

  return {
    props: {
      items: results.results,
      search,
    },
  };
};

const SearchResults = ({
  items,
  search,
}: InferGetServerSidePropsType<typeof getServerSideProps>): ReactElement => {
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
      <Container>
        <div className={Style.searchResultsContainer}>
          {items.map((result) => {
            return <SearchResult item={result} />;
          })}
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default SearchResults;
