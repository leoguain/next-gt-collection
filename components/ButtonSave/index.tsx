import React from "react";

import { Button } from "@chakra-ui/react";

export const ButtonSave = () => {
  return (
    <Button
      type="submit"
      bg="primary.500"
      _hover={{ bg: "secondary.500" }}
      color="#fff"
      borderRadius="md"
      fontSize="sm"
      w={"100%"}
      mb={4}
    >
      Cadastrar
    </Button>
  );
};
