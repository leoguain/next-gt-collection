import React from "react";
import { Box, Flex } from "@chakra-ui/react";

import { useTableHeader } from "../../hooks/useTableHeader";

export const CarTableHeader = () => {
  const { header } = useTableHeader();

  return (
    <Flex align={"center"} gap={1} mx={4}>
      {header.map(({ id, name, width }) => (
        <Box
          bg={"secondary.800"}
          color={"#fff"}
          display={name == "Id" ? "none" : "flex"}
          fontSize={"sm"}
          justifyContent={"center"}
          key={id}
          p={2}
          w={width}
        >
          {name}
        </Box>
      ))}
    </Flex>
  );
};
