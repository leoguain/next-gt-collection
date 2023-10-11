import {
  Flex,
  Button,
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
} from "@chakra-ui/react";

import { BrandProps } from "types/global";
import { AddCarForm } from "./components/AddCarForm";
import { FormTitle } from "components/FormComponents/FormTitle";

export const AddCarDrawer = ({ id, name }: BrandProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex>
      <Button
        bg="#fff"
        color="secondary.300"
        _hover={{ bg: "secondary.100", color: "#fff" }}
        onClick={onOpen}
        w={40}
      >
        + Novo Carro
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size={"xs"}>
        <DrawerContent bg={"secondary.600"}>
          <DrawerHeader pt={8}>
            <FormTitle title={name} subtitle="Adicionar novo carro" />
          </DrawerHeader>
          <DrawerBody>
            <AddCarForm id={id} onCancel={onClose} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};
