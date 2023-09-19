import React from "react";
import { useRouter } from "next/router";
import NextLink from "next/link";
import { HStack, Link, Flex } from "@chakra-ui/react";

import { When } from "../../../../shared/When";

import { MenuProps } from "../../types";

import { DesktopSubMenu } from "../DesktopSubMenu";

export const DesktopMenu = ({ items }: MenuProps) => {
  const { asPath } = useRouter();

  return (
    <Flex alignItems="center" justifyContent="space-between" gap={16}>
      <HStack fontSize={["sm", "md"]} gap={[2, 4]}>
        {items.map(({ id, href, subItems }) => (
          <React.Fragment key={id}>
            <When value={!!subItems.length}>
              <DesktopSubMenu id={id} href={href} subItems={subItems} />
            </When>

            <When value={!subItems.length}>
              <Link
                as={NextLink}
                color={asPath.includes(id) ? "primary.500" : "secondary.100"}
                _hover={{ color: "#fff" }}
                key={id}
                href={href}
                scroll={false}
              >
                {id}
              </Link>
            </When>
          </React.Fragment>
        ))}
      </HStack>
    </Flex>
  );
};
