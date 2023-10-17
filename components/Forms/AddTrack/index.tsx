import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Button,
  ButtonGroup,
  Input,
  FormControl,
  useToast,
  Flex,
  Select,
} from "@chakra-ui/react";

import { FieldLabel } from "../components/FieldLabel";
import { addTrack } from "backend/functions/trackFunctions";
import { TrackProps } from "types/global";

import { countries } from "../../../hooks/useCountries";

interface EventsProps {
  selectedId?: string;
  onCancel: () => void;
}

export const AddTrack = ({ selectedId, onCancel }: EventsProps) => {
  const toast = useToast();

  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useForm<TrackProps>();

  const onSubmit: SubmitHandler<TrackProps> = async (data) => {
    addTrack({ ...data }).then(
      (result) => {
        onCancel();
      },
      (error) => {
        console.log("ERROR: ", error);

        toast({
          title: "ATTENTION!",
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
    setFocus("name");
  }, [setFocus]);

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
          <FieldLabel text="Track name" color="tracks.500" />
          <Input
            bg="secondary.600"
            color={"#fff"}
            focusBorderColor="tracks.500"
            id="name"
            mb={8}
            placeholder="Enter Track Name"
            variant={"flushed"}
            _placeholder={{ opacity: 1, color: "secondary.100" }}
            {...register("name", { required: true })}
          />
          {errors.name && <span>This field cannot be empty.</span>}

          <FieldLabel text="Short Name" color="tracks.500" />
          <Input
            bg="secondary.600"
            color={"#fff"}
            focusBorderColor="tracks.500"
            id="shortName"
            mb={8}
            placeholder="Enter Track Short Name"
            variant={"flushed"}
            _placeholder={{ opacity: 1, color: "secondary.100" }}
            {...register("shortName", { required: true })}
          />
          {errors.name && <span>This field cannot be empty.</span>}
          <FieldLabel text="Country" color="tracks.500" />

          <Select
            bg="secondary.600"
            color={"secondary.100"}
            focusBorderColor="tracks.500"
            id="country"
            mb={8}
            placeholder={selectedId ? "" : "Choose Track Country"}
            size={["sm", "md"]}
            variant={"flushed"}
            _focus={{ bg: "tracks.500", color: "black" }}
            {...register("country", { required: true })}
          >
            {countries.map(({ id, name }) => (
              <React.Fragment key={id}>
                <option value={id} selected={selectedId === id ? true : false}>
                  {name}
                </option>
              </React.Fragment>
            ))}
          </Select>
          {errors.country && <span>This field cannot be empty.</span>}
          <FieldLabel text="Extension (m)" color="tracks.500" />
          <Input
            bg="secondary.600"
            color={"#fff"}
            focusBorderColor="tracks.500"
            id="extension"
            mb={8}
            placeholder="Enter Track Extension"
            type="number"
            variant={"flushed"}
            _placeholder={{ opacity: 1, color: "secondary.100" }}
            {...register("extension", { required: true, valueAsNumber: true })}
          />
          {errors.extension && <span>This field cannot be empty.</span>}
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
            Add
          </Button>
        </ButtonGroup>
      </form>
    </Flex>
  );
};
