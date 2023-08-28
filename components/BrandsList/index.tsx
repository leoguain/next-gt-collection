import React from "react";

import { Flex, Text } from "@chakra-ui/react";
import { BrandsProps } from "./types";

export const BrandsList = ({ brands }: BrandsProps) => {
  return (
    <Flex
      flexDirection={"column"}
      bg={"gray.800"}
      flex={1}
      color={"#fff"}
      p={4}
    >
      {brands
        .sort((a, b) => (a.name < b.name ? -1 : 1))
        .map(({ id, name }) => (
          <React.Fragment key={id}>
            <Text>{name}</Text>
          </React.Fragment>
        ))}
    </Flex>
  );
};
