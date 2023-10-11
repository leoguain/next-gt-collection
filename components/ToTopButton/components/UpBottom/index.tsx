import React from "react";
import { FaArrowUp } from "react-icons/fa";
import { Button } from "@chakra-ui/react";

export const UpButton = () => {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Button
      rounded={4}
      bg="secondary.800"
      color="#fff"
      cursor={"pointer"}
      onClick={goToTop}
      leftIcon={<FaArrowUp />}
      _hover={{ bg: "#fff", color: "secondary.500" }}
    >
      Topo
    </Button>
  );
};
