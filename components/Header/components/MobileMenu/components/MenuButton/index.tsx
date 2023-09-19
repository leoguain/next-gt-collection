import React from "react";
import NextLink from "next/link";

import {
  Flex,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";

import { RxChevronDown, RxChevronUp } from "react-icons/rx";
import { MenuProps } from "components/Header/types";

export const MenuButton = ({ items }: MenuProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <AccordionItem borderColor={"secondary.500"}>
      {({ isExpanded }) => (
        <React.Fragment>
          <AccordionButton
            flex="1"
            textAlign="left"
            justifyContent={"space-between"}
            color="secondary.100"
            _hover={{
              color: "#fff",
            }}
          >
            {id}
            {isExpanded ? (
              <IconButton
                aria-label="Close submenu"
                icon={<RxChevronUp />}
                bg={"secondary.800"}
                color="secondary.100"
                size="xl"
                _hover={{ color: "#fff" }}
                _active={{ color: "red" }}
              />
            ) : (
              <IconButton
                aria-label="Open submenu"
                icon={<RxChevronDown />}
                bg={"secondary.800"}
                color="secondary.100"
                size="xl"
                _hover={{ color: "#fff" }}
                _active={{ color: "red" }}
              />
            )}
          </AccordionButton>

          <AccordionPanel pb={4}>
            {subItems.map(({ id, href }) => (
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
                  color={"secondary.100"}
                  _hover={{
                    color: "#fff",
                    cursor: "pointer",
                  }}
                  borderTop={"solid 1px"}
                  borderColor={"secondary.300"}
                  onClick={onClose}
                >
                  {id}
                </AccordionButton>
              </NextLink>
            ))}
          </AccordionPanel>
        </React.Fragment>
      )}
    </AccordionItem>
  );
};
