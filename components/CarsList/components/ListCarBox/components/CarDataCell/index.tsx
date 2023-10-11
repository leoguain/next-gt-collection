import React from "react";
import { Flex, Text } from "@chakra-ui/react";

interface CellProps {
  cellText: string;
  cellWidth: string;
}

export const CarDataCell = ({ cellText, cellWidth }: CellProps) => {
  return (
    <Flex
      bg={"secondary.500"}
      color={"#fff"}
      display={cellWidth == "0em" ? "none" : "flex"}
      fontSize={"sm"}
      justifyContent={"center"}
      px={2}
      w={cellWidth}
    >
      {cellText}
    </Flex>
  );
};
