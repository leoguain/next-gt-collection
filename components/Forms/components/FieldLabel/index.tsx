import React from "react";

import { FormLabel } from "@chakra-ui/react";

interface LabelProps {
  text: string;
  color: string;
}

export const FieldLabel = ({ text, color }: LabelProps) => {
  return (
    <FormLabel color={color} fontSize={"md"} mt={2}>
      {text}
    </FormLabel>
  );
};
