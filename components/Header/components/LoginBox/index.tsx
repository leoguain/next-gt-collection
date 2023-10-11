import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { Languages } from "../../../../constants";

import { Flex, Select, Image, Button } from "@chakra-ui/react";

import { LoginDialog } from "components/LoginDialog";
import { RegisterDialog } from "components/RegisterDialog";

import useUser from "lib/useUser";
import fetchJson from "lib/fetchJson";

export const LoginBox = () => {
  const { user, mutateUser } = useUser();
  const router = useRouter();

  return (
    <Flex align={"center"} gap={8}>
      <LoginDialog />
      <RegisterDialog />

      {user?.isLoggedIn === false && (
        <Flex align={"center"}>
          <LoginDialog />
          <RegisterDialog />
        </Flex>
      )}
      {user?.isLoggedIn === true && (
        <Flex>
          <li>
            <Link href="/profile-sg" legacyBehavior>
              <a>
                <span>
                  <Image src={user.avatarUrl} width={32} height={32} alt="" />
                </span>
                Profile (Static Generation, recommended)
              </a>
            </Link>
          </li>
          <li>
            <Link href="/profile-ssr" legacyBehavior>
              <a>Profile (Server-side Rendering)</a>
            </Link>
          </li>
          <li>
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
          </li>
        </Flex>
      )}

      <Select
        variant={"unstyled"}
        color={"secondary.100"}
        defaultValue={"pt-br"}
        fontSize={"sm"}
        size="xs"
      >
        {Languages.map(({ code, label }) => (
          <option key={code} value={code}>
            {label}
          </option>
        ))}
      </Select>
    </Flex>
  );
};
