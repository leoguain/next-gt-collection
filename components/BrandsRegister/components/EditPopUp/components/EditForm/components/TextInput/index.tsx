import React, { ReactNode } from "react";

import { FormControl, FormLabel, Input } from "@chakra-ui/react";

interface Props {
  label: ReactNode;
  id: ReactNode;
  defaultValue: ReactNode;
}
export type Ref = HTMLButtonElement;

const TextInput = React.forwardRef<Ref, Props>((props, ref) => {
  return <FormControl></FormControl>;
});

TextInput.displayName = "TextInput";

export default TextInput;

/*
interface Props {
  label: ReactNode;
  id: ReactNode;
  defaultValue: ReactNode;
}
export type Ref = HTMLButtonElement;



<FormLabel htmlFor={props.id}>{props.label}</FormLabel>
      <Input ref={ref} id={props.id} {...props} />
*/
