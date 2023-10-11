import { LoginProps } from "types/global";
import fetchJson, { FetchError } from "lib/fetchJson";
import { useState } from "react";

export async function ValidateUser({ email, password }: LoginProps) {
  const body = {
    username: email,
    password: password,
  };

  const [errorMsg, setErrorMsg] = useState("");

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
}
/*

export async function addBrand({ id, name }: BrandProps) {
  const newId = id;
  const newName = name;

  try {
    const { data, status } = await Axios.post<BrandProps>("/api/brands", {
      id: newId,
      name: newName,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    if (status != 201) {
      throw Error("Esta montadora já existe.");
    } else {
      return { data, status };
    }
  } catch (error) {
    if (Axios.isAxiosError(error)) {
      throw Error("Axios " + error.message);
    } else {
      throw Error("DB " + error);
    }
  }
}


*/
