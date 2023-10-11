import React, { useState } from "react";

import {
  Button,
  useDisclosure,
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

import { useForm, SubmitHandler } from "react-hook-form";

import useUser from "lib/useUser";
import fetchJson, { FetchError } from "lib/fetchJson";
import { FieldLabel } from "components/FormComponents/FieldLabel";

type Inputs = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const [inputEmail, setInputEmail] = React.useState("");
  const handleEmail = (event: any) => setInputEmail(event.target.value);

  const [inputPassword, setInputPassword] = React.useState("");
  const handlePassword = (event: any) => setInputPassword(event.target.value);

  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    register,
    handleSubmit,
    setFocus,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  React.useEffect(() => {
    setFocus("email");
  }, [setFocus]);

  const { mutateUser } = useUser({
    redirectTo: "/estatisticas-piloto",
    redirectIfFound: true,
  });

  const [errorMsg, setErrorMsg] = useState("");

  const validateUser: SubmitHandler<Inputs> = async (data) => {
    const body = {
      username: data.email,
      password: data.password,
    };

    console.log(body);
    try {
      mutateUser(
        await fetchJson("/api/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        })
      );

      console.log(mutateUser.arguments);
    } catch (error) {
      if (error instanceof FetchError) {
        setErrorMsg(error.data.message);
      } else {
        console.error("An unexpected error happened:", error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(validateUser)}>
      <FormControl color={"#fff"}>
        <FieldLabel text="E-mail:" />
        <Input
          bg="#fff"
          color={"secondary.500"}
          id="email"
          placeholder="Enter your e-mail"
          value={inputEmail}
          {...register("email", {
            required: true,
            onChange: handleEmail,
          })}
        />
        <FieldLabel text="Password:" />
        <InputGroup>
          <Input
            bg="#fff"
            color={"secondary.500"}
            id="password"
            placeholder="Enter your password  (+4 chars)"
            value={inputPassword}
            type={show ? "text" : "password"}
            {...register("password", {
              required: true,
              onChange: handlePassword,
            })}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Button
        alignSelf={"end"}
        bg="#e00e0e"
        color="#fff"
        isDisabled={
          inputEmail.length > 0 && inputPassword.length > 4 ? false : true
        }
        mt={3}
        type="submit"
        _hover={{ bg: "#990000" }}
      >
        Sign In
      </Button>
    </form>
  );
};
