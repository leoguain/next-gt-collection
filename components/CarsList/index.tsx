import React from "react";

import { Flex, Text } from "@chakra-ui/react";
import { CarsProps } from "./types";
import { PrismaClient } from "@prisma/client";

export const CarsList = ({ cars }: CarsProps) => {
  return (
    <Flex
      flexDirection={"column"}
      bg={"gray.600"}
      flex={2}
      color={"#fff"}
      p={4}
    >
      {cars
        .sort((a, b) => (a.model < b.model ? -1 : 1))
        .map(({ id, model, year, price }) => (
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
          </Flex>
        ))}
    </Flex>
  );
};

const LoadCars = async () => {
  const prisma = new PrismaClient();
  const cars = await prisma.cars.findMany();

  return { cars };
};
