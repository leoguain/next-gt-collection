import { useForm, SubmitHandler } from "react-hook-form";

import Axios from "axios";
import { BrandProps } from "types/global";

export const onRegister: SubmitHandler<BrandProps> = async ({
  id,
  name,
}: BrandProps) => {
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
    console.log(JSON.stringify(data, null, 4));
    console.log(status);
    console.log(data);

    return { data };
  } catch (error) {
    if (Axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error occurred";
    }
  }
};
