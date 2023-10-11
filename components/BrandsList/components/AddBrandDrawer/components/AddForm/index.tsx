import React, { ChangeEvent, useState } from "react";

import { useForm, SubmitHandler } from "react-hook-form";

import {
  Button,
  useDisclosure,
  ButtonGroup,
  Stack,
  Input,
  FormControl,
  useToast,
  Image,
  Flex,
} from "@chakra-ui/react";

type Inputs = {
  id: string;
  name: string;
  logo: string;
};

interface EventsProps {
  onCancel: any;
}

import { addBrand } from "components/BrandsList/functions/addBrand";
import { FieldLabel } from "components/FormComponents/FieldLabel";
import axios from "axios";

import { useBrandsList } from "../../../../../BrandsList";

interface ImageProps {
  buffer: ArrayBuffer;
  type: string;
  brandId: string;
}

export const AddForm = ({ onCancel }: EventsProps) => {
  const { onClose } = useDisclosure();
  const { setBrandsList } = useBrandsList();

  const [image, setImage] = useState<File>();
  const [previewImage, setPreviewImage] = useState<string>();

  function handleSelectImages(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) {
      return;
    }

    const selectedImage = event.target.files[0] as File;

    setImage(selectedImage);

    const selectedImagePreview = URL.createObjectURL(selectedImage);

    setPreviewImage(selectedImagePreview);
  }

  const toast = useToast();

  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (!image) return;

    const buffer = Buffer.from(await image.arrayBuffer());

    const result = await axios.post<ImageProps>("/api/images", {
      brandId: data.id,
      buffer: buffer,
      type: "brands",
      headers: { "Content-Type": "multipart/form-data" },
    });

    addBrand({ ...data }).then(
      (result) => {
        onClose();
        setBrandsList((state) => state.filter((item) => item.id === data.id));
      },
      (error) => {
        console.log("ERRO: ", error);

        toast({
          title: "ATENÇÃO!",
          description: error.message,
          status: "warning",
          duration: 9000,
          isClosable: true,
          position: "bottom-right",
        });
      }
    );
  };

  React.useEffect(() => {
    setFocus("id");
  }, [setFocus]);

  return (
    <Stack spacing={4}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl color={"#fff"}>
          <FieldLabel text="Logo da marca:" />
          <Flex align={"center"} flexDirection={"column"} gap={2}>
            <Image
              key={previewImage}
              src={previewImage}
              alt={previewImage}
              w="150px"
            />
            <Input
              onChange={handleSelectImages}
              type="file"
              accept="image/png"
              border="none"
              id="image[]"
              fontSize={"sm"}
              flexFlow={"wrap column"}
              isRequired
            />
          </Flex>

          <FieldLabel text="Id da marca:" />
          <Input
            bg="#fff"
            color={"secondary.500"}
            id="brandId"
            {...register("id", { required: true })}
          />
          {errors.name && <span>Este campo não pode ser vazio.</span>}
          <FieldLabel text="Nome da marca:" />
          <Input
            bg="#fff"
            color={"secondary.500"}
            id="brandName"
            {...register("name", { required: true })}
          />
          {errors.name && <span>Este campo não pode ser vazio.</span>}
        </FormControl>

        <ButtonGroup mt={4} display="flex" justifyContent="flex-end">
          <Button
            bg="#fff"
            color="secondary.300"
            _hover={{ bg: "secondary.100", color: "#fff" }}
            onClick={onCancel}
          >
            Cancelar
          </Button>
          <Button
            type="submit"
            bg="#0e62e0"
            color="#fff"
            _hover={{ bg: "#003fb3" }}
          >
            Adicionar
          </Button>
        </ButtonGroup>
      </form>
    </Stack>
  );
};
