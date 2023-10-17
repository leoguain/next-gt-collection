import React from "react";
import Head from "next/head";

import type { InferGetStaticPropsType, GetStaticProps } from "next";

import { Page } from "components/Page";
import { Content } from "components/Content";
import { TracksList } from "components/TracksList";
import { TrackContextProvider } from "contexts/TracksContext";

function Pistas({
  pageTitle,
  description,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <React.Fragment>
      <Head>
        <title>{pageTitle}</title>
        <meta name={pageTitle} content={description} />
      </Head>

      <Page title={pageTitle} description={description}>
        <Content>
          <TrackContextProvider>
            <TracksList />
          </TrackContextProvider>
        </Content>
      </Page>
    </React.Fragment>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const pageTitle = "Pistas";
  const description = "Cadastro de Pistas";

  return {
    props: {
      pageTitle,
      description,
    },
    revalidate: 60 * 60, // 1 hour
  };
};

export default Pistas;
