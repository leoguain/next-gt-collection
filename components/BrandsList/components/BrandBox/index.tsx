import React from "react";

import { Flex, Text, Image, Button } from "@chakra-ui/react";
import { DeleteBrandDialog } from "./components/DeleteBrandDialog";
import { EditBrandDialog } from "./components/EditBrandDialog";

type BrandResponse = {
  id: string;
  name: string;
};

export const BrandsBox = ({ id, name }: BrandResponse) => {
  const brandsFile = "/brands/";

  return (
    <Flex
      key={id}
      borderRadius={"md"}
      direction={"column"}
      justifyContent={"center"}
      align={"center"}
      p={2}
      cursor={"pointer"}
      _hover={{ bg: "secondary.700" }}
    >
      <Image alt="brands logo" src={brandsFile + id + ".png"} width="75px" />
      <Text
        color={"gray.300"}
        fontSize={"lg"}
        align={"center"}
        _hover={{ color: "#fff" }}
      >
        {name}
      </Text>
      <Text color={"gray.100"} fontSize={"sm"} align={"center"}>
        id: {id}
      </Text>
      <Flex align={"center"} justify={"center"} gap={2} mt={4}>
        <EditBrandDialog id={id} name={name} />
        <DeleteBrandDialog id={id} name={name} />
      </Flex>
    </Flex>
  );
};

/*

    <Popover>
      <PopoverTrigger>

</PopoverTrigger>
      <Portal>
        <PopoverContent
          bg="secondary.600"
          border="solid 1px #c9c9c9"
          color="gray.100"
          w="4xs"
        >
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>
            <Flex flexDirection={"column"} gap={4}>
              <Flex flexDirection={"column"} align={"center"} gap={1}>
                <Image
                  alt="brands logo"
                  src={brandsFile + id + ".png"}
                  width="100px"
                />
                <Text color={"gray.100"} fontSize={"lg"} align={"center"}>
                  {name}
                </Text>
                <Text color={"gray.100"} fontSize={"sm"} align={"center"}>
                  id: {id}
                </Text>
              </Flex>
              <Flex align={"center"} justify={"center"} gap={2}>
                <Button size={"xs"} colorScheme="blue">
                  Editar
                </Button>
                <Button
                  size={"xs"}
                  colorScheme="blue"
                  onClick={() => {
                    deleteBrand({ id, name });
                  }}
                >
                  Excluir
                </Button>
                <AlertDialog
                  isOpen={isOpen}
                  leastDestructiveRef={cancelRef}
                  onClose={onClose}
                >
                  <AlertDialogOverlay>
                    <AlertDialogContent>
                      <AlertDialogHeader fontSize="lg" fontWeight="bold">
                        Delete Customer
                      </AlertDialogHeader>

                      <AlertDialogBody>
                        Confirma a exclusão? Essa ação não poderá ser desfeita.
                      </AlertDialogBody>

                      <AlertDialogFooter>
                        <Button onClick={onClose}>Cancel</Button>
                        <Button colorScheme="red" onClick={onClose} ml={3}>
                          Delete
                        </Button>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialogOverlay>
                </AlertDialog>
              </Flex>
            </Flex>
          </PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>













            <Button
          size={"xs"}
          bg="#e00e0e"
          color="#fff"
          _hover={{ bg: "#b30000" }}
          onClick={() => {
            deleteBrand({ id, name });
          }}
        >
          Excluir
        </Button>
*/
