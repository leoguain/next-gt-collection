import React, { ChangeEvent, useContext, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Button,
  ButtonGroup,
  Flex,
  FormControl,
  Image,
  Input,
  useToast,
} from "@chakra-ui/react";

import { addTrack, updateTrack } from "backend/functions/trackFunctions";
import { saveImage } from "backend/functions/imageFunctions";
import { TrackProps } from "types/global";

import { FieldLabel } from "../components/FieldLabel";
import { TrackContext } from "contexts/TracksContext";

interface EventsProps {
  originalId?: string;
  originalName?: string;
  originalShortName?: string;
  originalCountry?: string;
  originalExtension?: string;
  onCancel: any;
}

export const AddEditTrack = ({
  originalId,
  originalName,
  onCancel,
}: EventsProps) => {
  const { fetchTracks } = useContext(TrackContext);
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
  } = useForm<TrackProps>();

  const onSubmit: SubmitHandler<TrackProps> = async (data) => {
    try {
      if (originalId) {
        // Editing an existing brand
        await updateTrack({ ...data });
      } else {
        // Adding a new brand
        await addTrack({ ...data });
      }

      if (image) {
        await saveImage({ id: data.id, image: image, type: "brands" });
      }

      fetchTracks();
      onCancel();
    } catch (error) {
      console.error("ERRO: ", error);

      const errorMessage = originalId
        ? "Error updating track"
        : "Error adding track";

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
    setFocus("name");
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
          <FieldLabel text="Track logo" color="tracks.500" />

          <Flex align={"center"} flexDirection={"column"} gap={2}>
            <Image
              key={previewImage}
              src={
                originalId && !previewImage
                  ? `/api/images?trackId=${originalId}&type=tracks`
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
          <FieldLabel text="Track name" color="tracks.500" />
          <Input
            bg="secondary.600"
            color={"#fff"}
            defaultValue={originalName ? originalName : ""}
            focusBorderColor="tracks.500"
            id="brandName"
            placeholder="Enter Track Name"
            variant={"flushed"}
            _placeholder={{ opacity: 1, color: "secondary.100" }}
            {...register("name", { required: true })}
          />
          {errors.name && <span>This field cannot be empty.</span>}
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
            bg="tracks.800"
            color="#fff"
            type="submit"
            w={20}
            _hover={{ bg: "tracks.500", color: "secondary.600" }}
          >
            {originalId ? "Edit" : "Add"}
          </Button>
        </ButtonGroup>
      </form>
    </Flex>
  );
};
