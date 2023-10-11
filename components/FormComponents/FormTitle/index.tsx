import React from "react";
import { Text } from "@chakra-ui/react";

interface TitleProps {
  title: string;
  subtitle: string;
}

export const FormTitle = ({ title, subtitle }: TitleProps) => {
  return (
    <React.Fragment>
      <Text color={"gray.300"} align={"center"} lineHeight={1}>
        {title}
      </Text>
      <Text color={"gray.300"} align={"center"} fontSize={"xs"}>
        {subtitle}
      </Text>
    </React.Fragment>
  );
};
