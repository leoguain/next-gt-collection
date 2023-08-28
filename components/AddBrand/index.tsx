import React, { useState, useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { Flex, FormControl, Button, Input } from "@chakra-ui/react";
import { FieldLabel } from "./components/FieldLabel";

import { PrismaClient } from "@prisma/client";

type Inputs = {
  id: string;
  name: string;
};

export const AddBrand = () => {
  /*const prisma = new PrismaClient();
  const brandsDb = await prisma.brands.findMany();

  const [brands, setContacts] = useState(brandsDb);

  const saveBrand = async (brand: any) => {
    const response = await fetch("/api/contacts", {
      method: "POST",
      body: JSON.stringify(brand),
      headers: {
        "Content-Type": "application/json; charset=utf8",
      },
    });

    console.log("response", brand);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return await response.json();
  };*/

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>();

  const form: React.RefObject<HTMLFormElement> = useRef(null);

  const onSubmit: SubmitHandler<Inputs> = async () => {
    try {
      /*await saveBrand(form.current);
      setContacts([...brands, form.current]);*/
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Flex
      bg={"#fff"}
      w="100%"
      mx="auto"
      px={[4, 6, 6, 6, 32]}
      py={2}
      gap={[0, 2, 8]}
      justifyContent={["space-between"]}
      align="center"
    >
      <form ref={form} onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <FieldLabel text="Id*" />
          <Input
            id="id"
            type="text"
            placeholder="Id da marca"
            bg="#fff"
            size={["sm", "md"]}
            mb={4}
            {...register("name", { required: true })}
          />
          {errors.name && <span>O campo Id é obrigatório</span>}

          <FieldLabel text="Nome*" />
          <Input
            id="name"
            type="text"
            placeholder="Nome da marca"
            bg="#fff"
            size={["sm", "md"]}
            mb={4}
            {...register("name", { required: true })}
          />
          {errors.name && <span>O campo Nome é obrigatório</span>}
        </FormControl>

        <Button
          isLoading={isSubmitting}
          loadingText="Cadastrando"
          type="submit"
          bg="primary.500"
          _hover={{ bg: "secondary.500" }}
          color="#fff"
          borderRadius="md"
          fontSize="sm"
          w={"100%"}
          mb={4}
        >
          Cadastrar
        </Button>
      </form>
    </Flex>
  );
};
