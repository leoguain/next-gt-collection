import React from "react";
import Link from "next/link";
import { Text, Flex } from "@chakra-ui/react";

import { FaPhoneAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

export const TopBar = () => {
  return (
    <Flex
      bg={"#fff"}
      top="0"
      left="0"
      right="0"
      zIndex="5"
      w="100%"
      maxWidth={"7xl"}
      mx="auto"
      px={4}
      direction={["column", "row"]}
      alignItems="center"
      borderBottom="2px solid"
      borderColor="gray.200"
      gap={[0, 2, 4]}
    >
      <Flex alignItems="center" gap={2} color="primary.500">
        <FaPhoneAlt />
        <Link passHref href="tel:1130035411">
          <Text as="span" color="primary.500" fontSize="sm">
            11 3003-5411
          </Text>
        </Link>
      </Flex>
      <Flex alignItems="center" gap={2} color="primary.500">
        <GrMail />
        <Link passHref href="mailto:email@rbac120.com.br">
          <Text as="span" color="primary.500" fontSize="sm">
            email@rbac120.com.br
          </Text>
        </Link>
      </Flex>
    </Flex>
  );
};
