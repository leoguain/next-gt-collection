import Axios from "axios";
import { BrandProps } from "types/global";

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
