import React, { useState, useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import Axios from "axios";

import { Flex, FormControl, Button, Input, Image } from "@chakra-ui/react";
import { FieldLabel } from "./components/FieldLabel";
import { BrandProps } from "types/global";
import { onRegister } from "./functions/onRegister";
import { EditPopup } from "../EditPopUp";

type Inputs = {
  id: string;
  name: string;
};

type BrandResponse = {
  id: string;
  name: string;
};

async function createBrand() {
  try {
    const { data, status } = await Axios.post<Inputs>("/api/brands", {
      id: "nissan",
      name: "Nissan",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    console.log(JSON.stringify(data, null, 4));

    console.log(status);

    return data;
  } catch (error) {
    if (Axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      // 👇️ error: AxiosError<any, any>
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error occurred";
    }
  }
}

async function updateBrand() {
  try {
    const { data, status } = await Axios.put<BrandResponse>("/api/brands", {
      id: "nissan",
      name: "Nissan 2",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    console.log(JSON.stringify(data, null, 4));

    console.log(status);

    return data;
  } catch (error) {
    if (Axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      // 👇️ error: AxiosError<any, any>
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error occurred";
    }
  }
}

async function deleteBrand() {
  const params = { id: "nissan" };

  try {
    const { data, status } = await Axios.delete<BrandResponse>("/api/brands", {
      data: params,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    console.log(JSON.stringify(data, null, 4));

    console.log(status);

    return data;
  } catch (error) {
    if (Axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      // 👇️ error: AxiosError<any, any>
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error occurred";
    }
  }
}

export const RegisterForm = ({ id, name }: BrandProps) => {
  const brandsFile = "/brands/";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>();

  const form: React.RefObject<HTMLFormElement> = useRef(null);

  const onSubmit: SubmitHandler<Inputs> = async () => {
    try {
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  console.log(id + " " + name);
  return (
    <Flex
      bg={"secondary.500"}
      flexDirection={"column"}
      w="100%"
      mx="auto"
      px={[4]}
      py={4}
      align="center"
    >
      <Image
        alt="brands logo"
        src={id ? brandsFile + id + ".png" : "/brands/nissan.png"}
        width="150px"
      />

      <form ref={form} onSubmit={handleSubmit(onRegister)}>
        <FormControl>
          <FieldLabel text="Id da Marca*" />
          <Input
            id="id"
            type="text"
            bg="#fff"
            size={["sm", "md"]}
            mb={4}
            defaultValue={id ? id : ""}
            {...register("id", { required: true })}
          />
          {errors.name && <span>O campo Id é obrigatório</span>}

          <FieldLabel text="Nome da Marca*" />
          <Input
            id="name"
            type="text"
            bg="#fff"
            size={["sm", "md"]}
            mb={4}
            defaultValue={name ? name : ""}
            {...register("name", { required: true })}
          />
          {errors.name && <span>O campo Nome é obrigatório</span>}
        </FormControl>

        <Button
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
