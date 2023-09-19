import React from "react";
import { ButtonGroup, Button, Stack } from "@chakra-ui/react";
import TextInput from "./components/TextInput";

export const EditForm = ({ firstFieldRef, onCancel }: any) => {
  return (
    <Stack spacing={4}>
      <TextInput
        label="First name"
        id="first-name"
        defaultValue="John"
        ref={firstFieldRef}
      />
      <TextInput label="Last name" id="last-name" defaultValue="Smith" />
      <ButtonGroup display="flex" justifyContent="flex-end">
        <Button variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button colorScheme="teal">Save</Button>
      </ButtonGroup>
    </Stack>
  );
};
