import React from "react";
import {
  Text,
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

import { deleteTrack } from "backend/functions/trackFunctions";

interface DialogProps {
  id: string;
  name: string;
}

export const DeleteTrackDialog = ({ id, name }: DialogProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef<HTMLButtonElement>(null);

  const handleDelete = () => {
    deleteTrack({ trackId: id });

    onClose();
  };

  return (
    <React.Fragment>
      <Tooltip
        aria-label="Button tooltip"
        bg={"#f64747"}
        color={"#fff"}
        hasArrow
        label="Delete track"
      >
        <Button
          color="#fff"
          fontSize={"md"}
          onClick={onOpen}
          rightIcon={<CloseIcon />}
          variant={"ghost"}
          _active={{ color: "#f64747" }}
          _hover={{ color: "#f64747" }}
        ></Button>
      </Tooltip>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={() => onClose()}
      >
        <AlertDialogOverlay>
          <AlertDialogContent bg="secondary.700" borderRadius={"sm"}>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              <Text color={"tracks.500"} fontSize={"md"}>
                DELETE TRACK{" "}
              </Text>
              <Text color={"#fff"} fontSize={"4xl"}>
                {name}
              </Text>
              <Text color={"#fff"} fontSize={"md"}>
                id: {id}
              </Text>
            </AlertDialogHeader>
            <AlertDialogBody>
              <Text color={"#aaaaaa"} fontSize={"md"} noOfLines={2}>
                Do you really want to delete this track? This operation CANNOT
                be undone.
              </Text>
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button
                bg="secondary.100"
                color="#fff"
                onClick={onClose}
                ref={cancelRef}
                _hover={{ bg: "#fff", color: "secondary.500" }}
              >
                Cancel
              </Button>
              <Button
                bg="#f64747"
                color="#fff"
                ml={3}
                onClick={handleDelete}
                _hover={{ bg: "#b62e2e" }}
              >
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </React.Fragment>
  );
};
