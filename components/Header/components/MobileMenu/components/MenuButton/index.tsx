import { IconButton } from "@chakra-ui/react";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { MouseEventHandler } from "react";

interface ButtonProps {
  label: string;
  icon: ReactJSXElement;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export const MenuButton = ({ label, icon, onClick }: ButtonProps) => (
  <IconButton
    aria-label={label}
    bg="secondary.800"
    color="secondary.100"
    icon={icon}
    onClick={onClick}
    size="lg"
    _hover={{ color: "#fff" }}
    _active={{ color: "#fff" }}
  />
);
