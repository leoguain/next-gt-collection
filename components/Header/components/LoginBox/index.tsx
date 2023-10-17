import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { Flex, Image, Button } from "@chakra-ui/react";

import { LoginDialog } from "components/LoginDialog";
import { RegisterDialog } from "components/RegisterDialog";

import useUser from "lib/useUser";
import fetchJson from "lib/fetchJson";

export const LoginBox = () => {
  const { user, mutateUser } = useUser();
  const router = useRouter();

  return (
    <Flex align={"center"} gap={8}>
      {(user?.isLoggedIn === false || user === undefined) && (
        <Flex align={"center"}>
          <LoginDialog />
          <RegisterDialog />
        </Flex>
      )}
      {user?.isLoggedIn === true && (
        <Flex align={"center"} color={"secondary.100"}>
          <li>
            <Link href="/profile-sg" legacyBehavior>
              <a>
                <span></span>
                Profile (Static Generation, recommended)
              </a>
            </Link>
          </li>
          <li>
            <Link href="/profile-ssr" legacyBehavior>
              <a>Profile (Server-side Rendering)</a>
            </Link>
          </li>
          <Image
            borderRadius={"100%"}
            src={`/Users/${user.avatarUrl}.png`}
            w={12}
            h={12}
            alt="User profile image."
          />

          <Button
            size={"xs"}
            background={"secondary.800"}
            color={"secondary.100"}
            _hover={{ color: "#fff" }}
          >
            Edit Profile
          </Button>

          <Link href="/api/logout">
            <Button
              size={"xs"}
              background={"secondary.800"}
              color={"secondary.100"}
              _hover={{ color: "#fff" }}
              onClick={async (e) => {
                e.preventDefault();
                mutateUser(
                  await fetchJson("/api/logout", { method: "POST" }),
                  false
                );
                router.push("/");
              }}
            >
              Logout
            </Button>
          </Link>
        </Flex>
      )}
    </Flex>
  );
};
