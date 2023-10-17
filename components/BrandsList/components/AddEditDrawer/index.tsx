import {
  Flex,
  Button,
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  DrawerCloseButton,
  Tooltip,
} from "@chakra-ui/react";

import { FormTitle } from "components/FormComponents/FormTitle";
import { EditIcon, PlusSquareIcon } from "@chakra-ui/icons";
import { AddEditBrand } from "components/Forms/AddEditBrand";

interface DrawerProps {
  originalId?: string;
  originalName?: string;
  originalCountry?: string;
}
export const AddEditDrawer = ({ originalId, originalName }: DrawerProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex>
      <Tooltip
        aria-label="Button tooltip"
        bg={"brands.500"}
        color={"secondary.800"}
        hasArrow
        label="Edit brand"
        display={originalId ? "flex" : "none"}
      >
        <Button
          color="#fff"
          fontSize={!originalId ? ["xs", "md"] : "xl"}
          onClick={onOpen}
          rightIcon={!originalId ? <PlusSquareIcon /> : <EditIcon />}
          variant={"ghost"}
          _active={{ color: "brands.500" }}
          _hover={{ color: "brands.500" }}
        >
          {!originalId ? "Add New Brand" : ""}
        </Button>
      </Tooltip>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size={"xs"}>
        <DrawerContent bg={"secondary.600"}>
          <DrawerCloseButton color={"#fff"} />
          <DrawerHeader>
            <FormTitle
              title={originalId ? "Edit " + originalName : "Add New Brand"}
              subtitle="Registrations"
            />
          </DrawerHeader>
          <DrawerBody>
            <AddEditBrand
              originalId={originalId}
              originalName={originalName}
              onCancel={onClose}
            />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};
