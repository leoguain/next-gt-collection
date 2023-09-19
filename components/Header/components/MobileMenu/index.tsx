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

import {
  RxHamburgerMenu,
  RxCross2,
  RxChevronDown,
  RxChevronUp,
} from "react-icons/rx";

import { When } from "../../../../shared/When";

import { MenuProps } from "../../types";

export const MobileMenu = ({ items }: MenuProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex alignSelf="left">
      <IconButton
        aria-label="Main menu"
        icon={<RxHamburgerMenu size={28} />}
        bg={"secondary.800"}
        color="secondary.100"
        onClick={onOpen}
        size="lg"
        _hover={{ color: "#fff" }}
        _active={{ color: "red" }}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        size="xs"
      >
        <DrawerOverlay />
        <DrawerContent bg={"secondary.800"}>
          <DrawerHeader mt={2}>
            <IconButton
              aria-label="Close menu"
              icon={<RxCross2 size={28} />}
              bg={"secondary.800"}
              color="secondary.100"
              onClick={onClose}
              size="lg"
              _hover={{ color: "#fff" }}
              _active={{ color: "red" }}
            />
          </DrawerHeader>
          <DrawerBody display="flex" flexDir="column">
            <Accordion allowMultiple>
              {items.map(({ id, href, subItems }) => (
                <React.Fragment key={id}>
                  {subItems.length > 0 ? (
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
                  ) : (
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
                          {id}
                        </AccordionButton>
                      </AccordionItem>
                    </NextLink>
                  )}
                </React.Fragment>
              ))}
            </Accordion>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};
