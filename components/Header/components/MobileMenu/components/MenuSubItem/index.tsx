import React, { MouseEventHandler } from "react";
import NextLink from "next/link";
import { AccordionButton } from "@chakra-ui/react";

interface ItemProps {
  id: string;
  title: string;
  href: string;
  onClose: MouseEventHandler<HTMLButtonElement>;
}

export const MenuSubItem = ({ id, title, href, onClose }: ItemProps) => (
  <NextLink
    key={id}
    href={href}
    passHref
    scroll={false}
    style={{
      textDecoration: "none",
    }}
  >
    <AccordionButton
      as="span"
      flex="1"
      textAlign="left"
      color={`${id}.500`}
      cursor="pointer"
      _hover={{
        borderColor: `${id}.100`,
        color: `${id}.100`,
      }}
      borderTop={"solid 1px"}
      borderColor={`${id}.500`}
      onClick={onClose}
    >
      {title}
    </AccordionButton>
  </NextLink>
);
