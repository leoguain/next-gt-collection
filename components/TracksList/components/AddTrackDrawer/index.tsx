import {
  Flex,
  Button,
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
} from "@chakra-ui/react";
import { PlusSquareIcon } from "@chakra-ui/icons";

import { FormTitle } from "components/Forms/components/FormTitle";
import { AddTrack } from "components/Forms/AddTrack";

export const AddTrackDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex>
      <Button
        leftIcon={<PlusSquareIcon />}
        bg="secondary.700"
        color="#fff"
        fontSize={"md"}
        onClick={onOpen}
        w={40}
        _hover={{ color: "tracks.500" }}
        _active={{ color: "tracks.500" }}
      >
        Add New Track
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size={"xs"}>
        <DrawerContent bg={"secondary.600"}>
          <DrawerHeader>
            <FormTitle title="Add New Track" subtitle="Registrations" />
          </DrawerHeader>
          <DrawerBody>
            <AddTrack onCancel={onClose} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};
