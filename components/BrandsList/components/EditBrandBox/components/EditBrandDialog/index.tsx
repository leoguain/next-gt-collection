import React from "react";

import {
  Button,
  useDisclosure,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";

import { BrandProps } from "types/global";
import { EditForm } from "./components/EditForm";

export const EditBrandDialog = ({ id, name }: BrandProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstFieldRef = React.useRef<HTMLInputElement>(null);

  return (
    <Popover
      isOpen={isOpen}
      initialFocusRef={firstFieldRef}
      onOpen={onOpen}
      onClose={() => onClose()}
      placement="right"
      closeOnBlur={true}
      closeOnEsc
    >
      <PopoverTrigger>
        <Button
          size={"xs"}
          bg="#0e62e0"
          color="#fff"
          _hover={{ bg: "#003fb3" }}
          onClick={onOpen}
        >
          Editar
        </Button>
      </PopoverTrigger>
      <PopoverContent
        p={5}
        bg="secondary.300"
        borderColor={"secondary.300"}
        color="#fff"
      >
        <PopoverArrow />
        <PopoverCloseButton />
        <EditForm
          id={id}
          name={name}
          firstFieldRef={firstFieldRef}
          onCancel={onClose}
        />
      </PopoverContent>
    </Popover>
  );
};
