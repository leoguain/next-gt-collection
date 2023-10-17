import React from "react";

import { FormLabel } from "@chakra-ui/react";

interface TextProps {
  text: string;
}

export const FieldLabel = ({ text }: TextProps) => {
  return (
    <FormLabel color={"primary.500"} fontSize={"md"} mt={2}>
      {text}
    </FormLabel>
  );
};
