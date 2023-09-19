import React from "react";
import { useRouter } from "next/router";
import NextLink from "next/link";

import {
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
} from "@chakra-ui/react";

import { HiChevronDown } from "react-icons/hi";
import { HiChevronUp } from "react-icons/hi";

import { MenuItemProps } from "../../types";

export const DesktopSubMenu = ({ id, href, subItems }: MenuItemProps) => {
  const { asPath } = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Menu isOpen={isOpen} closeOnBlur>
      <MenuButton
        as={Button}
        bg="#181818"
        rightIcon={isOpen ? <HiChevronUp /> : <HiChevronDown />}
        href={href}
        outline="secondary.500"
        color={asPath.includes(id) ? "primary.500" : "secondary.500"}
        _hover={{
          bg: "#181818",
          color: "secondary.500",
        }}
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        _expanded={{ bg: "#181818" }}
      >
        {id}
      </MenuButton>

      <MenuList
        bg={"#181818"}
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        onClick={onClose}
      >
        {subItems.map(({ id, href }) => (
          <Link
            as={NextLink}
            key={id}
            href={href}
            passHref
            scroll={false}
            color={asPath.includes(id) ? "primary.500" : "secondary.500"}
            _hover={{ color: "primary.500", textDecoration: "none" }}
          >
            <MenuItem bg={"#181818"}>{id}</MenuItem>
          </Link>
        ))}
      </MenuList>
    </Menu>
  );
};
