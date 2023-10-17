import React from "react";
import {
  Flex,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  Accordion,
} from "@chakra-ui/react";
import {
  RxHamburgerMenu,
  RxCross2,
  RxChevronDown,
  RxChevronUp,
} from "react-icons/rx";

import { MenuProps } from "../../types";
import { MenuButton } from "./components/MenuButton";
import { MenuItem } from "./components/MenuItem";
import { MenuItemDropDown } from "./components/MenuItemDropDown";

export const MainMenu = ({ items }: MenuProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex alignSelf="left">
      <MenuButton
        label="Main menu"
        icon={<RxHamburgerMenu size={28} />}
        onClick={onOpen}
      />
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement="left"
        returnFocusOnClose={false}
        size="xs"
      >
        <DrawerOverlay />
        <DrawerContent bg={"secondary.800"}>
          <DrawerHeader mt={2}>
            <MenuButton
              label="Close menu"
              icon={<RxCross2 size={28} />}
              onClick={onClose}
            />
          </DrawerHeader>
          <DrawerBody display="flex" flexDir="column">
            <Accordion allowMultiple>
              {items.map(({ id, title, href, subItems }) => (
                <React.Fragment key={id}>
                  {subItems.length > 0 ? (
                    <MenuItemDropDown
                      title={title}
                      openIcon={<RxChevronDown />}
                      closeIcon={<RxChevronUp />}
                      subItems={subItems}
                      onClose={onClose}
                    />
                  ) : (
                    <MenuItem
                      id={id}
                      title={title}
                      href={href}
                      onClose={onClose}
                    />
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
