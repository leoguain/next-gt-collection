import React from "react";

import {
  Text,
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
  AlertDialogCloseButton,
} from "@chakra-ui/react";

import { LoginForm } from "./components/LoginForm";

export const LoginDialog = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef<HTMLButtonElement>(null);

  return (
    <React.Fragment>
      <Button
        size={"xs"}
        background={"secondary.800"}
        color={"secondary.100"}
        _hover={{ color: "#fff" }}
        onClick={onOpen}
      >
        Sign In
      </Button>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={() => onClose()}
      >
        <AlertDialogOverlay>
          <AlertDialogContent bg="secondary.600">
            <AlertDialogCloseButton color={"#fff"} />
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              <Text fontSize={"md"}>Login</Text>
            </AlertDialogHeader>
            <AlertDialogBody flexDirection={"column"} alignItems={"center"}>
              <LoginForm />
            </AlertDialogBody>
            <AlertDialogFooter flexDirection={"column"} alignItems={"center"}>
              <Text align="center" fontSize={"sm"}>
                Not have an account yet? Register here
              </Text>
              <Text align="center" fontSize={"sm"}>
                Forgot your Username or Password?
              </Text>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </React.Fragment>
  );
};

/*

import React, { useState } from "react";

import {
  Text,
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
  AlertDialogCloseButton,
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

import { useForm, SubmitHandler } from "react-hook-form";

import useUser from "lib/useUser";
import fetchJson, { FetchError } from "lib/fetchJson";
import { FieldLabel } from "components/FormComponents/FieldLabel";
import { LoginForm } from "./components/LoginForm";

type Inputs = {
  email: string;
  password: string;
};

export const LoginDialog = () => {
  const [inputEmail, setInputEmail] = React.useState("");
  const handleEmail = (event: any) => setInputEmail(event.target.value);

  const [inputPassword, setInputPassword] = React.useState("");
  const handlePassword = (event: any) => setInputPassword(event.target.value);

  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef<HTMLButtonElement>(null);

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
    try {
      mutateUser(
        await fetchJson("/api/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        })
      );
    } catch (error) {
      if (error instanceof FetchError) {
        setErrorMsg(error.data.message);
      } else {
        console.error("An unexpected error happened:", error);
      }
    }
  };

  return (
    <React.Fragment>
      <Button
        size={"xs"}
        background={"secondary.800"}
        color={"secondary.100"}
        _hover={{ color: "#fff" }}
        onClick={onOpen}
      >
        Sign In
      </Button>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={() => {
          setInputEmail(""),
            setInputPassword(""),
            reset({
              email: "",
              password: "",
            }),
            onClose();
        }}
      >
        <AlertDialogOverlay>
          <AlertDialogContent bg="secondary.600">
            <AlertDialogCloseButton color={"#fff"} />
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              <Text fontSize={"md"}>Login</Text>
            </AlertDialogHeader>
            <AlertDialogBody flexDirection={"column"} alignItems={"center"}>
              <LoginForm />
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
                    inputEmail.length > 0 && inputPassword.length > 4
                      ? false
                      : true
                  }
                  mt={3}
                  type="submit"
                  _hover={{ bg: "#990000" }}
                >
                  Sign In
                </Button>
              </form>
            </AlertDialogBody>
            <AlertDialogFooter flexDirection={"column"} alignItems={"center"}>
              <Text align="center" fontSize={"sm"}>
                Not have an account yet? Register here
              </Text>
              <Text align="center" fontSize={"sm"}>
                Forgot your Username or Password?
              </Text>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </React.Fragment>
  );
};


*/
