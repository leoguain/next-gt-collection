import React from "react";

import { Flex, Text, Image } from "@chakra-ui/react";
import { DeleteBrandDialog } from "./components/DeleteBrandDialog";
import { EditBrandDialog } from "./components/EditBrandDialog";

type BrandResponse = {
  id: string;
  name: string;
};

export const EditBrandsBox = ({ id, name }: BrandResponse) => {
  const brandsFile = "/brands/";

  return (
    <Flex
      key={id}
      borderRadius={"md"}
      direction={"column"}
      justifyContent={"center"}
      align={"center"}
      p={2}
      cursor={"pointer"}
      _hover={{ bg: "secondary.700" }}
    >
      <Image alt="brands logo" src={brandsFile + id + ".png"} width="75px" />
      <Text
        color={"gray.300"}
        fontSize={"lg"}
        align={"center"}
        _hover={{ color: "#fff" }}
      >
        {name}
      </Text>
      <Text color={"gray.100"} fontSize={"sm"} align={"center"}>
        id: {id}
      </Text>
      <Flex align={"center"} justify={"center"} gap={2} mt={4}>
        <EditBrandDialog id={id} name={name} />
        <DeleteBrandDialog id={id} name={name} />
      </Flex>
    </Flex>
  );
};
