import React, { useContext } from "react";
import {
  Text,
  Image,
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Tooltip,
  useDisclosure,
  Flex,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

import { BrandContext } from "contexts/BrandsContext";

import { BrandProps } from "types/global";
import { deleteBrand } from "backend/functions/brandFunctions";

export const DeleteBrandDialog = ({ id, name }: BrandProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { fetchBrands } = useContext(BrandContext);
  const cancelRef = React.useRef<HTMLButtonElement>(null);

  const handleDelete = async () => {
    try {
      await deleteBrand({ id, name });
      fetchBrands();
      onClose();
    } catch (error) {
      console.error("Error deleting brand: ", error);
    }
  };

  return (
    <React.Fragment>
      <Tooltip
        aria-label="Button tooltip."
        bg={"#f64747"}
        color={"#fff"}
        hasArrow
        label="Delete brand"
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
              <Text color={"brands.500"} fontSize={"md"}>
                DELETE BRAND{" "}
              </Text>
              <Flex align={"center"} gap={4}>
                <Image
                  alt="brands logo"
                  src={`/api/images?id=${id}&type=brands`}
                  w={["75px"]}
                />
                <Flex color={"#aaaaaa"} flexDirection={"column"}>
                  <Flex fontSize={name.length > 15 ? "xl" : "4xl"}>{name}</Flex>
                  <Flex fontSize={"md"}>id: {id}</Flex>
                </Flex>
              </Flex>
            </AlertDialogHeader>
            <AlertDialogBody>
              <Text color={"#aaaaaa"} fontSize={"md"} noOfLines={2}>
                Do you really want to delete this brand? This operation CANNOT
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
