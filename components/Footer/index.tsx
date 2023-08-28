import React from "react";

import { Flex } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Flex
      bg={"#fff"}
      w="100%"
      mx="auto"
      px={[4, 6, 6, 6, 32]}
      py={2}
      gap={[0, 2, 8]}
      justifyContent={["space-between"]}
      align="center"
    ></Flex>
  );
};
