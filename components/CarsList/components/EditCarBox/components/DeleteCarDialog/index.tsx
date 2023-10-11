import React from "react";

import {
  Text,
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
} from "@chakra-ui/react";

import { BrandProps } from "types/global";
import { deleteCar } from "../../../../functions/deleteCar";

export const DeleteCarDialog = ({ id, name }: BrandProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef<HTMLButtonElement>(null);

  return (
    <>
      <Button
        size={"xs"}
        bg="#e00e0e"
        color="#fff"
        _hover={{ bg: "#b30000" }}
        onClick={onOpen}
      >
        x
      </Button>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={() => onClose()}
      >
        <AlertDialogOverlay>
          <AlertDialogContent bg="secondary.500">
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              <Text fontSize={"md"}>Excluir Montadora: </Text>
              <Text fontSize={"2xl"}>{name}</Text>
            </AlertDialogHeader>
            <AlertDialogBody>
              <Text fontSize={"md"}>Deseja mesmo excluir essa montadora?</Text>
              <Text fontSize={"md"}>
                Essa operação não poderá ser desfeita.
              </Text>
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button
                ref={cancelRef}
                bg="#fff"
                color="secondary.300"
                _hover={{ bg: "secondary.100", color: "#fff" }}
                onClick={onClose}
              >
                Cancelar
              </Button>
              <Button
                bg="#e00e0e"
                color="#fff"
                _hover={{ bg: "#990000" }}
                ml={3}
                onClick={() => {
                  deleteCar({ id, name });
                  onClose();
                  window.location.reload();
                }}
              >
                Excluir
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};
