import React from "react";
import Head from "next/head";
import { PrismaClient } from "@prisma/client";

import type { InferGetStaticPropsType, GetStaticProps } from "next";

import { Page } from "components/Page";
import { Content } from "components/Content";
import { AddBrand } from "components/AddBrand";
import { BrandsList } from "components/BrandsList";
import { CarsList } from "components/CarsList";

function Home({
  pageTitle,
  description,
  brands,
  cars,
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
            <BrandsList brands={brands} />
            <CarsList cars={cars} />
            <AddBrand />
          </React.Fragment>
        </Content>
      </Page>
    </React.Fragment>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prisma = new PrismaClient();
  const pageTitle = "GT Collection";
  const description = "Your personal garage on Gran Turismo.";
  const brands = await prisma.brands.findMany();
  const cars = await prisma.cars.findMany();

  return {
    props: {
      pageTitle,
      description,
      brands: brands,
      cars: cars,
    },
    revalidate: 60 * 60, // 1 hour
  };
};

const saveContact = async (brands: any) => {
  const response = await fetch("/api/brands", {
    method: "POST",
    body: JSON.stringify(brands),
    headers: {
      "Content-Type": "application/json; charset=utf8",
    },
  });

  console.log("response", brands);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
};

const delContact = async (brands: any) => {
  if (
    window.confirm(
      "Deseja mesmo excluir esta marca? Essa operação não poderá ser desfeita."
    )
  ) {
    await fetch("/api/deleteBrand", {
      method: "POST",
      body: JSON.stringify({
        id: brands.id,
      }),
      headers: {
        "Content-Type": "application/json; charset=utf8",
      },
    });
  }
};

export default Home;

/*
      <AddBrand />
      */
