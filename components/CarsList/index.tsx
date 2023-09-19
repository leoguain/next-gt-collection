import React from "react";

import { Flex, Text, Image } from "@chakra-ui/react";
import { BrandProps } from "components/BrandsList/types";

export const CarsList = ({ id, name }: BrandProps) => {
  const brandsFile = "/brands/";

  return (
    <Flex bg={"#474747"} flex={2} color={"#fff"} p={4}>
      <Flex
        flexDirection={"column"}
        align={"center"}
        justifyContent={"center"}
        w={40}
      >
        <Image alt="brands logo" src={brandsFile + id + ".png"} width="75px" />
      </Flex>
    </Flex>
  );
};

/*

      <Flex
        flexDirection={"column"}
        align={"center"}
        justifyContent={"center"}
        w={40}
      >
        <Image alt="brands logo" src={brandsFile + id + ".png"} width="50px" />
        <Text color={"gray.100"}>{name}</Text>
        <Text color={"gray.100"}>{id}</Text>
      </Flex>


      
 {cars
        .sort((a, b) => (a.model < b.model ? -1 : 1))
        .map(({ id, model, year, price, brandId }) => (
          <Flex key={id} gap={16}>
            <Text align={"start"} w={64}>
              {model}
            </Text>
            <Text align={"center"} w={12}>
              {year}
            </Text>
            <Text align={"end"} w={24}>
              {price}
            </Text>
            <Text align={"end"} w={24}>
              {brandId}
            </Text>
          </Flex>
        ))}



        const LoadCars = async () => {
  const prisma = new PrismaClient();
  const listCars = await prisma.cars.findMany({
    where: {
      brandId: "alfa",
    },
    orderBy: {
      model: "asc",
    },
  });

  return { listCars };
};

        */
