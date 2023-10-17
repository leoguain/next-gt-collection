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
import { AddEditTrack } from "components/Forms/AddEditTrack";

interface DrawerProps {
  originalId?: string;
  originalName?: string;
  originalShortName?: string;
  originalCountry?: string;
  originalExtension?: string;
}
export const AddEditDrawer = ({
  originalId,
  originalName,
  originalShortName,
  originalCountry,
  originalExtension,
}: DrawerProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex>
      <Tooltip
        aria-label="Button tooltip"
        bg={"tracks.500"}
        color={"secondary.800"}
        hasArrow
        label="Edit track"
        display={originalId ? "flex" : "none"}
      >
        <Button
          color="#fff"
          fontSize={!originalId ? ["xs", "md"] : "xl"}
          onClick={onOpen}
          rightIcon={!originalId ? <PlusSquareIcon /> : <EditIcon />}
          variant={"ghost"}
          _active={{ color: "tracks.500" }}
          _hover={{ color: "tracks.500" }}
        >
          {!originalId ? "Add New Track" : ""}
        </Button>
      </Tooltip>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size={"xs"}>
        <DrawerContent bg={"secondary.600"}>
          <DrawerCloseButton color={"#fff"} />
          <DrawerHeader>
            <FormTitle
              title={originalId ? "Edit " + originalName : "Add New Track"}
              subtitle="Registrations"
            />
          </DrawerHeader>
          <DrawerBody>
            <AddEditTrack
              originalId={originalId}
              originalName={originalName}
              originalShortName={originalShortName}
              originalCountry={originalCountry}
              originalExtension={originalExtension}
              onCancel={onClose}
            />{" "}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};
