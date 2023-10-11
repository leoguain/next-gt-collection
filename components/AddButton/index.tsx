import { Button, useDisclosure } from "@chakra-ui/react";

interface ButtonProps {
  text: string;
}
export const AddButton = ({ text }: ButtonProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Button
      bg="#fff"
      color="secondary.300"
      _hover={{ bg: "secondary.100", color: "#fff" }}
      onClick={onOpen}
      w={40}
    >
      {text}
    </Button>
  );
};
