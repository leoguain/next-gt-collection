import React from "react";
import { Flex, HStack, Image } from "@chakra-ui/react";

import Link from "next/link";
import { useHeader } from "./hooks/useHeader";
import { MobileMenu } from "./components/MobileMenu";

export const Header = () => {
  const { menuItems } = useHeader();

  return (
    <Flex
      position="sticky"
      bg={"secondary.800"}
      top="0"
      w="100%"
      mx="auto"
      px={[4, 6, 6, 6, 4]}
      py={6}
      gap={[0, 2, 8]}
      justifyContent={["space-between"]}
      align="center"
      opacity={"0.8"}
      _hover={{ opacity: "1" }}
      boxShadow={"dark-lg"}
    >
      <MobileMenu items={menuItems} />
    </Flex>
  );
};

/*

        <Link href="/">
          <HStack>
            {" "}
            <Image src="/brands/porsche.png" alt="logo BVR" width={"4em"} />
          </HStack>
        </Link>

        
          <When value={isMobile}>
            <MobileMenu items={menuItems} />
          </When>
          <When value={!isMobile}>
            <DesktopMenu items={menuItems} />
          </When>
          */
