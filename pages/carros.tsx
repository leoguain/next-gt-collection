import React from "react";
import Head from "next/head";

import type { InferGetStaticPropsType, GetStaticProps } from "next";

import { Page } from "components/Page";
import { Content } from "components/Content";
import { CarsList } from "components/CarsList";

function Carros({
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
          <React.Fragment>
            <CarsList />
          </React.Fragment>
        </Content>
      </Page>
    </React.Fragment>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const pageTitle = "Carros";
  const description = "Cadastro de Carros";

  return {
    props: {
      pageTitle,
      description,
    },
    revalidate: 60 * 60, // 1 hour
  };
};

export default Carros;
