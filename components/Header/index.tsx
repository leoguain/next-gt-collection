import React from "react";
import { Flex } from "@chakra-ui/react";
import { useHeader } from "./hooks/useHeader";

import { MainMenu } from "./components/MobileMenu";
import { LoginBox } from "./components/LoginBox";
import { LanguageSelector } from "./components/LanguageSelector";

export const Header = () => {
  const { menuItems } = useHeader();

  return (
    <Flex
      align="center"
      bg={"secondary.800"}
      boxShadow={"dark-lg"}
      gap={[0, 2, 8]}
      justifyContent={["space-between"]}
      mx="auto"
      opacity={"0.8"}
      position="sticky"
      px={[4, 6, 6, 6, 4]}
      py={6}
      top="0"
      w="100%"
      zIndex={1}
      _hover={{ opacity: "1" }}
    >
      <MainMenu items={menuItems} />

      <Flex gap={8}>
        <LoginBox />
        <LanguageSelector />
      </Flex>
    </Flex>
  );
};
