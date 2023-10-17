import React, { ChangeEvent, useContext, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Button,
  ButtonGroup,
  Flex,
  FormControl,
  Image,
  Input,
  Select,
  useToast,
} from "@chakra-ui/react";

import { addBrand, updateBrand } from "backend/functions/brandFunctions";
import { saveImage } from "backend/functions/imageFunctions";
import { BrandProps } from "types/global";

import { FieldLabel } from "../components/FieldLabel";
import { BrandContext } from "contexts/BrandsContext";

import { countries } from "../../../hooks/useCountries";

interface EventsProps {
  originalId?: string;
  originalName?: string;
  originalCountry?: string;
  onCancel: any;
}

export const AddEditBrand = ({
  originalId,
  originalName,
  originalCountry,
  onCancel,
}: EventsProps) => {
  const { fetchBrands } = useContext(BrandContext);
  const [image, setImage] = useState<File>();
  const [previewImage, setPreviewImage] = useState<string>("");

  const toast = useToast();

  function handleSelectImages(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) {
      return;
    }

    const selectedImage = event.target.files[0] as File;
    const selectedImagePreview = URL.createObjectURL(selectedImage);

    setImage(selectedImage);
    setPreviewImage(selectedImagePreview);
  }

  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useForm<BrandProps>();

  const onSubmit: SubmitHandler<BrandProps> = async (data) => {
    try {
      console.log(data);
      if (!image) {
        return;
      }

      const buffer = Buffer.from(await image.arrayBuffer());
      console.log(buffer);

      if (originalId) {
        // Editing an existing brand
        //await updateBrand({ ...data });
      } else {
        // Adding a new brand
        await addBrand({
          id: data.id,
          name: data.name,
          country: data.country,
          logo: buffer,
        });
      }

      if (image) {
        await saveImage({ id: data.id, image: image, type: "brands" });
      }

      //fetchBrands();
      onCancel();
    } catch (error) {
      console.error("ERRO: ", error);

      const errorMessage = originalId
        ? "Error updating brand"
        : "Error adding brand";

      if (error instanceof Error) {
        toast({
          title: "ATTENTION",
          description: errorMessage + ": " + error.message,
          status: "warning",
          duration: 9000,
          isClosable: true,
          position: "bottom-right",
        });
      }
    }
  };

  React.useEffect(() => {
    setFocus(originalId ? "name" : "id");
  }, [originalId, setFocus]);

  return (
    <Flex
      align="center"
      bg={"secondary.600"}
      flexDirection={"column"}
      mx="auto"
      px={[4]}
      py={4}
      w="100%"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl color={"#fff"}>
          <FieldLabel text="Brand logo" color="brands.500" />

          <Flex align={"center"} flexDirection={"column"} gap={2}>
            <Image
              key={previewImage}
              src={
                originalId && !previewImage
                  ? `/api/images?id=${originalId}&type=brands`
                  : previewImage
              }
              alt={previewImage}
              w="100px"
            />
            <Input
              accept="image/png"
              border="none"
              fontSize={"sm"}
              flexFlow={"wrap column"}
              id="image[]"
              mb={8}
              onChange={handleSelectImages}
              type="file"
              isRequired={originalId ? false : true}
            />
          </Flex>

          <FieldLabel text="Brand id" color="brands.500" />
          <Input
            bg="secondary.600"
            color={originalId ? "secondary.100" : "#fff"}
            defaultValue={originalId ? originalId : ""}
            focusBorderColor="brands.500"
            id="brandId"
            isReadOnly={originalId ? true : false}
            mb={8}
            placeholder="Enter Brand Id"
            variant={"flushed"}
            _placeholder={{ opacity: 1, color: "secondary.100" }}
            {...register("id", { required: true })}
          />
          {errors.name && <span>This field cannot be empty.</span>}
          <FieldLabel text="Brand name" color="brands.500" />
          <Input
            bg="secondary.600"
            color={"#fff"}
            defaultValue={originalName ? originalName : ""}
            focusBorderColor="brands.500"
            id="brandName"
            mb={8}
            placeholder="Enter Brand Name"
            variant={"flushed"}
            _placeholder={{ opacity: 1, color: "secondary.100" }}
            {...register("name", { required: true })}
          />
          {errors.name && <span>This field cannot be empty.</span>}
          <FieldLabel text="Brand Country" color="brands.500" />
          <Select
            bg="secondary.600"
            color={"secondary.100"}
            focusBorderColor="brands.500"
            id="country"
            mb={8}
            placeholder={originalCountry ? "" : "Choose Brand Country"}
            size={["sm", "md"]}
            variant={"flushed"}
            _focus={{ bg: "brands.500", color: "black" }}
            {...register("country", { required: true })}
          >
            {countries.map(({ id, name }) => (
              <React.Fragment key={id}>
                <option
                  value={id}
                  selected={originalCountry === id ? true : false}
                >
                  {name}
                </option>
              </React.Fragment>
            ))}
          </Select>
          {errors.country && <span>This field cannot be empty.</span>}
        </FormControl>

        <ButtonGroup mt={4} display="flex" justifyContent="flex-end">
          <Button
            bg="secondary.100"
            color="#fff"
            onClick={onCancel}
            w={20}
            _hover={{ bg: "#fff", color: "secondary.500" }}
          >
            Cancel
          </Button>
          <Button
            bg="brands.800"
            color="#fff"
            type="submit"
            w={20}
            _hover={{ bg: "brands.500", color: "secondary.600" }}
          >
            {originalId ? "Edit" : "Add"}
          </Button>
        </ButtonGroup>
      </form>
    </Flex>
  );
};
