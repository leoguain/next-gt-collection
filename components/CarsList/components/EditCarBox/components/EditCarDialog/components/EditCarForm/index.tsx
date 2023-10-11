import React from "react";

import { useForm, SubmitHandler } from "react-hook-form";

import {
  Button,
  useDisclosure,
  ButtonGroup,
  Stack,
  FormLabel,
  Input,
  FormControl,
} from "@chakra-ui/react";

type Inputs = {
  id: string;
  name: string;
  firstFieldRef: any;
  onCancel: any;
};

import { updateBrand } from "components/BrandsList/functions/updateBrand";

export const EditCarForm = ({ id, name, firstFieldRef, onCancel }: Inputs) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    updateBrand({ ...data });
    onClose();
    window.location.reload();
  };

  React.useEffect(() => {
    setFocus("name");
  }, [setFocus]);

  return (
    <Stack spacing={4}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl color={"#fff"}>
          <FormLabel htmlFor={id}>Id da Marca:</FormLabel>
          <Input
            bg="secondary.100"
            color={"secondary.600"}
            id="brandId"
            defaultValue={id}
            {...register("id")}
            isReadOnly
          />
          <FormLabel htmlFor={id}>Nome da Marca:</FormLabel>
          <Input
            bg="#fff"
            color={"secondary.500"}
            id="brandName"
            defaultValue={name}
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
            Alterar
          </Button>
        </ButtonGroup>
      </form>
    </Stack>
  );
};
