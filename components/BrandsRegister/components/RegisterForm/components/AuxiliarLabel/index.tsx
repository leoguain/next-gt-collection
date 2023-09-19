import React from "react";

import { FormHelperText } from "@chakra-ui/react";

interface TextProps {
  text?: string;
}

export const AuxiliarLabel = ({ text }: TextProps) => {
  return (
    <FormHelperText pl={2} mb={4} fontSize="smaller" color={"gray.300"}>
      {text}
    </FormHelperText>
  );
};
