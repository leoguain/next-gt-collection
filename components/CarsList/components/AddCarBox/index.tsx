import React from "react";

import { Flex, Text, Image } from "@chakra-ui/react";
import { AddCarDrawer } from "./components/AddCarDrawer";
import { BrandProps } from "types/global";

export const AddCarBox = ({ id, name }: BrandProps) => {
  const brandsFile = "/brands/";

  return (
    <Flex align={"center"} justifyContent={"space-between"} p={4} w={"4xl"}>
      <Flex align={"center"} gap={4} px={4}>
        <Image alt="brands logo" src={brandsFile + id + ".png"} width="75px" />
        <Text color={"gray.300"} fontSize={"xl"} _hover={{ color: "#fff" }}>
          {name}
        </Text>
      </Flex>

      <AddCarDrawer id={id} name={name} />
    </Flex>
  );
};
