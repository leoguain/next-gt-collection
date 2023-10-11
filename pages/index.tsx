import React from "react";
import Head from "next/head";

import type { InferGetStaticPropsType, GetStaticProps } from "next";

import { Page } from "components/Page";
import { Content } from "components/Content";
import { Flex } from "@chakra-ui/react";

import { DriversRankingDashboard } from "components/Dashboards/DriversRankingDashboard";

function Home({
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
          <Flex color={"#fff"} direction={"column"} gap={8} my={8}>
            <Flex color={"#fff"} gap={4} justifyContent={"space-between"}>
              <Flex gap={4}>
                <Flex
                  align={"center"}
                  bg="cyan"
                  boxSize={20}
                  color={"secondary.800"}
                  justifyContent={"center"}
                >
                  Foto
                </Flex>
                <Flex flexDirection={"column"} justifyContent={"space-between"}>
                  <Flex flexDirection={"column"}>
                    <Flex fontSize={"xl"}>Leonardo Guain</Flex>
                    <Flex>id: leoguain</Flex>
                  </Flex>

                  <Flex gap={4}>
                    <Flex>Lvl.: 50</Flex>
                    <Flex>License SS</Flex>
                  </Flex>
                  <Flex
                    color={"cyan"}
                    fontSize={"xs"}
                    justifyContent={"flex-end"}
                    align={"flex-end"}
                  >
                    More details
                  </Flex>
                </Flex>
              </Flex>

              <Flex
                flexDirection={"column"}
                gap={2}
                justifyContent={"space-between"}
              >
                <Flex justifyContent={"center"}>Garage</Flex>
                <Flex flexDirection={"column"} px={4}>
                  <Flex
                    align={"center"}
                    gap={2}
                    justifyContent={"space-between"}
                  >
                    <Flex>Car(s)</Flex>
                    <Flex>327</Flex>
                  </Flex>
                  <Flex
                    align={"center"}
                    gap={2}
                    justifyContent={"space-between"}
                  >
                    <Flex>Credits</Flex>
                    <Flex>20,000,000</Flex>
                  </Flex>
                </Flex>
                <Flex
                  color={"cyan"}
                  fontSize={"xs"}
                  justifyContent={"flex-end"}
                  align={"flex-end"}
                >
                  My garage
                </Flex>
              </Flex>

              <Flex gap={4}>
                <Flex flexDirection={"column"} justifyContent={"center"}>
                  <Flex>Ranking position</Flex>
                  <Flex align={"center"} justifyContent={"center"}>
                    <Flex fontSize={"5xl"}>22</Flex>
                    <Flex fontSize={"2xl"}>#</Flex>
                  </Flex>
                  <Flex color={"cyan"} fontSize={"xs"} justifyContent={"end"}>
                    History
                  </Flex>
                </Flex>
              </Flex>
              <Flex
                flexDirection={"column"}
                gap={2}
                justifyContent={"space-between"}
              >
                <Flex justifyContent={"center"}>Season 2023 Stats</Flex>
                <Flex gap={4} px={4}>
                  <Flex flexDirection={"column"} align={"center"}>
                    <Flex>578</Flex>
                    <Flex>Races</Flex>
                  </Flex>
                  <Flex flexDirection={"column"} align={"center"}>
                    <Flex>92</Flex>
                    <Flex>Wins</Flex>
                  </Flex>
                  <Flex flexDirection={"column"} align={"center"}>
                    <Flex>114</Flex>
                    <Flex>Poles</Flex>
                  </Flex>
                  <Flex flexDirection={"column"} align={"center"}>
                    <Flex>21,926</Flex>
                    <Flex>Points</Flex>
                  </Flex>
                </Flex>
                <Flex
                  color={"cyan"}
                  fontSize={"xs"}
                  justifyContent={"flex-end"}
                  align={"flex-end"}
                >
                  More details
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Content>
      </Page>
    </React.Fragment>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const pageTitle = "GT Collection";
  const description = "Your personal garage on Gran Turismo.";

  return {
    props: {
      pageTitle,
      description,
    },
    revalidate: 60 * 60, // 1 hour
  };
};

export default Home;
