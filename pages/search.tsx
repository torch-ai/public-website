import { ReactElement } from "react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import { getHeadPageTitle } from "../utils/meta";
import { searchEntries } from "../contentful/client";
import PageHeader from "../components/PageHeader/PageHeader";
import Container from "../components/Container/Container";
import PageTitle from "../components/PageTitle/PageTitle";
import PageSubtitle from "../components/PageSubtitle/PageSubtitle";
import Footer from "../components/Footer";
import SearchResult from "../components/Search/SearchResult";
import { TypeNews } from "../generated/contentful/TypeNews";
import { TypePage } from "../generated/contentful/TypePage";

export const getServerSideProps: GetServerSideProps<{
  items: (TypeNews | TypePage)[];
  search: string;
}> = async ({ query }) => {
  let search = query.q as string;
  let results = await searchEntries(search);

  return {
    props: {
      items: results.items.filter(
        (result) =>
          !!result.fields.slug &&
          (result.sys.contentType.sys.id == "news" ||
            result.sys.contentType.sys.id == "page")
      ),
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
        {items.map((result) => {
          return <SearchResult key={result.sys.id} item={result} />;
        })}
      </Container>
      <Footer />
    </>
  );
};

export default SearchResults;
