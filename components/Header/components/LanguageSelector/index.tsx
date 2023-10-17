import React from "react";
import { Flex, Select } from "@chakra-ui/react";
import { Languages } from "../../../../constants";

export const LanguageSelector = () => {
  return (
    <Flex align={"center"} gap={8}>
      <Select
        variant={"unstyled"}
        color={"secondary.100"}
        defaultValue={"en"}
        fontSize={"sm"}
        size="xs"
      >
        {Languages.map(({ code, label }) => (
          <option key={code} value={code}>
            {label}
          </option>
        ))}
      </Select>
    </Flex>
  );
};
