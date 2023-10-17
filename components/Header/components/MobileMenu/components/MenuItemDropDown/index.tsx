import React, { MouseEventHandler } from "react";
import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  IconButton,
} from "@chakra-ui/react";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { MenuSubItem } from "../MenuSubItem";
import { SubItemProps } from "components/Header/types";

interface ItemProps {
  title: string;
  openIcon: ReactJSXElement;
  closeIcon: ReactJSXElement;
  subItems: SubItemProps[];
  onClose: MouseEventHandler<HTMLButtonElement>;
}

export const MenuItemDropDown = ({
  title,
  openIcon,
  closeIcon,
  subItems,
  onClose,
}: ItemProps) => (
  <AccordionItem borderColor={"secondary.100"}>
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
          {title}
          {isExpanded ? (
            <IconButton
              aria-label="Close submenu"
              icon={closeIcon}
              bg={"secondary.800"}
              color="secondary.100"
              size="xl"
              _hover={{ color: "#fff" }}
              _active={{ color: "#fff" }}
            />
          ) : (
            <IconButton
              aria-label="Open submenu"
              icon={openIcon}
              bg={"secondary.800"}
              color="secondary.100"
              size="xl"
              _hover={{ color: "#fff" }}
              _active={{ color: "#fff" }}
            />
          )}
        </AccordionButton>
        <AccordionPanel pb={4}>
          {subItems.map(({ id, title, href }: SubItemProps) => (
            <MenuSubItem
              key={id}
              id={id}
              title={title}
              href={href}
              onClose={onClose}
            />
          ))}
        </AccordionPanel>
      </React.Fragment>
    )}
  </AccordionItem>
);
