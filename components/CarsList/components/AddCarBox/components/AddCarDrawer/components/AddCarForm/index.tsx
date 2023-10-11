import React from "react";

import { useForm, SubmitHandler, Controller } from "react-hook-form";

import { addCar } from "components/CarsList/functions/addCar";

import { FieldLabel } from "components/FormComponents/FieldLabel";

import {
  Button,
  Flex,
  useDisclosure,
  ButtonGroup,
  Stack,
  Input,
  FormControl,
  useToast,
  RadioGroup,
  Radio,
  HStack,
} from "@chakra-ui/react";

import { CarProps } from "types/global";

interface FormProps {
  id: string;
  onCancel: any;
}

export const AddCarForm = ({ id, onCancel }: FormProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const toast = useToast();

  const {
    register,
    handleSubmit,
    setFocus,
    control,
    formState: { errors },
  } = useForm<CarProps>();

  const onSubmit: SubmitHandler<CarProps> = (data) => {
    data.brandId = id;

    addCar({ ...data }).then(
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
          position: "bottom-right",
        });
      }
    );
  };

  React.useEffect(() => {
    setFocus("model");
  }, [setFocus]);

  return (
    <Flex
      bg={"secondary.600"}
      flexDirection={"column"}
      w="100%"
      mx="auto"
      px={[4]}
      pb={4}
      align="center"
    >
      <Stack spacing={2}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl color={"#fff"}>
            <FieldLabel text="Modelo:" />
            <Input
              bg="#fff"
              color={"secondary.500"}
              id="brandId"
              {...register("model", { required: true })}
            />
            {errors.model && <span>Este campo não pode ser vazio.</span>}
            <FieldLabel text="Ano:" />
            <Input
              bg="#fff"
              type="number"
              color={"secondary.500"}
              id="brandId"
              {...register("year", { required: true })}
            />
            {errors.year && <span>Este campo não pode ser vazio.</span>}
            <FieldLabel text="Preço:" />
            <Input
              bg="#fff"
              color={"secondary.500"}
              id="brandId"
              type="number"
              {...register("price", { required: true })}
            />
            {errors.price && <span>Este campo não pode ser vazio.</span>}
            <FieldLabel text="Tração:" />

            <Controller
              name="drivetrain"
              control={control}
              render={({ field: { onChange, value } }) => (
                <RadioGroup onChange={onChange} value={value}>
                  <HStack spacing={4} flexFlow={"wrap"}>
                    <Radio value="AWD">AWD</Radio>
                    <Radio value="FF">FF</Radio>
                    <Radio value="FR">FR</Radio>
                    <Radio value="MR">MR</Radio>
                    <Radio value="RR">MR</Radio>
                  </HStack>
                </RadioGroup>
              )}
            />
            {errors.drivetrain && <span>Selecione ao menos uma opção.</span>}

            <FieldLabel text="Força (hp):" />
            <Input
              bg="#fff"
              color={"secondary.500"}
              id="brandId"
              type="number"
              {...register("power", { required: true })}
            />
            {errors.power && <span>Este campo não pode ser vazio.</span>}
            <FieldLabel text="Peso (lb):" />
            <Input
              bg="#fff"
              color={"secondary.500"}
              id="brandId"
              type="number"
              {...register("weight", { required: true })}
            />
            {errors.weight && <span>Este campo não pode ser vazio.</span>}
            <FieldLabel text="Aspiração do Motor:" />
            <Controller
              name="aspiration"
              control={control}
              render={({ field: { onChange, value } }) => (
                <RadioGroup
                  onChange={onChange}
                  value={value}
                  defaultValue="Aspirado"
                >
                  <HStack spacing={2} flexFlow={"wrap"}>
                    <Radio value="Aspirado">Aspirado</Radio>
                    <Radio value="Turbo">Turbo / Compressor</Radio>
                  </HStack>
                </RadioGroup>
              )}
            />
            {errors.aspiration && <span>Este campo não pode ser vazio.</span>}
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
    </Flex>
  );
};

/*

onClose();
        window.location.reload();

        */
