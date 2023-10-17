import React from "react";
import { FormControl, Input, Text } from "@chakra-ui/react";

type InputFieldProps = {
  label: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
};

const InputField: React.FC<InputFieldProps> = ({
  label,
  id,
  value,
  onChange,
  error,
}) => {
  return (
    <FormControl color="#fff">
      <Text fontSize="lg">{label}</Text>
      <Input
        id={id}
        value={value}
        onChange={onChange}
        bg="secondary.600"
        color="#fff"
        placeholder={`Enter ${label}`}
        variant="flushed"
      />
      {error && <span>{error}</span>}
    </FormControl>
  );
};

export default InputField;
