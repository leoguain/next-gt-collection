import React from "react";

import { useForm, SubmitHandler } from "react-hook-form";

import {
  Button,
  useDisclosure,
  ButtonGroup,
  Stack,
  Input,
  FormControl,
  useToast,
  Box,
} from "@chakra-ui/react";

type Inputs = {
  id: string;
  name: string;
  onCancel: any;
};

import { addBrand } from "components/BrandsList/functions/addBrand";
import { FieldLabel } from "./componentes/FieldLabel";

export const AddForm = ({ id, name, onCancel }: Inputs) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const toast = useToast();

  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    addBrand({ ...data }).then(
      (result) => {
        console.log("TESTE: ", result);
        onClose();
        window.location.reload();
      },
      (error) => {
        console.log("ERRO: ", error);

        toast({
          title: "ATENÇÃO!",
          description: error.message,
          status: "warning",
          duration: 9000,
          isClosable: true,
          position: "bottom-left",
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
          <FieldLabel text="Id da marca:" />
          <Input
            bg="#fff"
            color={"secondary.500"}
            id="brandId"
            defaultValue={id}
            {...register("id", { required: true })}
          />
          {errors.name && <span>Este campo não pode ser vazio.</span>}
          <FieldLabel text="Nome da marca:" />
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
            Adicionar
          </Button>
        </ButtonGroup>
      </form>
    </Stack>
  );
};
