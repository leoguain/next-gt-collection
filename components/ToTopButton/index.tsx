import React, { useState, useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import { UpButton } from "./components/UpBottom";

export const ToTopButton = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setShowTopBtn(window.scrollY > 100 ? true : false);
    });
  }, []);

  return (
    <Flex
      position={"fixed"}
      bottom={["5em", "5em", "1em"]}
      right={["0em", "0em", "1em"]}
      opacity={["0.8", "0.8", "1"]}
      zIndex="3"
    >
      {showTopBtn && <UpButton />}
    </Flex>
  );
};
