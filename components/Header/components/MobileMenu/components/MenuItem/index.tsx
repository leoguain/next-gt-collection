import React, { MouseEventHandler } from "react";
import NextLink from "next/link";
import { AccordionItem, AccordionButton } from "@chakra-ui/react";

interface ItemProps {
  id: string;
  title: string;
  href: string;
  onClose: MouseEventHandler<HTMLButtonElement>;
}

export const MenuItem = ({ id, title, href, onClose }: ItemProps) => (
  <NextLink
    key={id}
    href={href}
    passHref
    scroll={false}
    style={{
      textDecoration: "none",
    }}
  >
    <AccordionItem borderColor={"secondary.100"}>
      <AccordionButton
        as="span"
        flex="1"
        textAlign="left"
        color="secondary.100"
        _hover={{ color: "#fff" }}
        onClick={onClose}
      >
        {title}
      </AccordionButton>
    </AccordionItem>
  </NextLink>
);
