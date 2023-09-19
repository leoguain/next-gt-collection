import React from "react";

import { FormLabel } from "@chakra-ui/react";

interface TextProps {
  text?: string;
}

export const FieldLabel = ({ text }: TextProps) => {
  return (
    <FormLabel mt={4} color={"gray.300"}>
      {text}
    </FormLabel>
  );
};
