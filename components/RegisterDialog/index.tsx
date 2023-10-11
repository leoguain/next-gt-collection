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
  AlertDialogCloseButton,
} from "@chakra-ui/react";

export const RegisterDialog = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef<HTMLButtonElement>(null);

  return (
    <>
      <Button
        size={"xs"}
        background={"secondary.800"}
        color={"secondary.100"}
        _hover={{ color: "#fff" }}
        onClick={onOpen}
      >
        Register
      </Button>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={() => onClose()}
      >
        <AlertDialogOverlay>
          <AlertDialogContent bg="secondary.600">
            <AlertDialogCloseButton color={"#fff"} />
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              <Text fontSize={"md"}>Register</Text>
            </AlertDialogHeader>
            <AlertDialogBody>
              <Text fontSize={"md"}>Name:</Text>
              <Text fontSize={"md"}>NickName/IdPsn:</Text>
              <Text fontSize={"md"}>Country:</Text>
              <Text fontSize={"md"}>Birthday:</Text>
              <Text fontSize={"md"}>E-mail:</Text>
              <Text fontSize={"md"}>Password:</Text>
              <Text fontSize={"md"}>Confirm Password:</Text>
              <Button
                bg="#e00e0e"
                color="#fff"
                _hover={{ bg: "#990000" }}
                ml={3}
                onClick={() => {
                  onClose();
                }}
              >
                Register
              </Button>
            </AlertDialogBody>
            <AlertDialogFooter flexDirection={"column"} alignItems={"center"}>
              <Text align="center" fontSize={"sm"}>
                Already have an account? Enter here
              </Text>
              <Text align="center" fontSize={"sm"}>
                By accepting, you are agreeing to our Terms and Conditions.
              </Text>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};
