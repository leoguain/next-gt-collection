import React, { useState } from "react";

import {
  Flex,
  Button,
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  Text,
} from "@chakra-ui/react";

import { AddForm } from "./components/AddForm";

export const AddBrandDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex>
      <Button
        bg="#fff"
        color="secondary.300"
        _hover={{ bg: "secondary.100", color: "#fff" }}
        onClick={onOpen}
        w={40}
      >
        + Nova Montadora
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size={"xs"}>
        <DrawerContent bg={"secondary.600"}>
          <DrawerHeader>
            <Text color={"gray.300"} align={"center"}>
              Adicionar nova montadora
            </Text>
          </DrawerHeader>
          <DrawerBody>
            <Flex
              bg={"secondary.600"}
              flexDirection={"column"}
              w="100%"
              mx="auto"
              px={[4]}
              py={4}
              align="center"
            >
              <AddForm onCancel={onClose} />
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

/*
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  

function handleSelectImages(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) {
      return;
    }

    const selectedImages = Array.from(event.target.files);

    setImages(selectedImages);

    const selectedImagesPreview = selectedImages.map((image) => {
      return URL.createObjectURL(image);
    });

    setPreviewImages(selectedImagesPreview);
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const data = new FormData();

    data.append("id", id);
    data.append("name", name);

    images.forEach((image) => {
      data.append("image", image);
    });

    try {
      const response = await fetch("/api/imgUpload", {
        method: "POST",
        body: data,
      });
      if (response.ok) {
        console.log("Upload successful");
      }
    } catch (error) {
      console.error(error);
    }
    alert("Cadastro realizado com sucesso!");
  }
  
const [file, setFile] = useState<File | undefined>();
  const [preview, setPreview] = useState<string | ArrayBuffer | null>(null);

  async function handleOnChange(e: React.FormEvent<HTMLInputElement>) {
    const target = e.target as HTMLInputElement & {
      files: FileList;
    };

    setFile(target.files[0]);

    const file = new FileReader();

    file.onload = function () {
      setPreview(file.result);
    };

    file.readAsDataURL(target.files[0]);

    console.log(preview);
  }

  */
