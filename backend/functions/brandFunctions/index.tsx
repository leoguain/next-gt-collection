import Axios from "axios";
import { BrandProps } from "types/global";
import { deleteImage } from "../imageFunctions";

export async function addBrand({ id, name, country, logo }: BrandProps) {
  try {
    const { data, status } = await Axios.post<BrandProps>("/api/brands", {
      id,
      name,
      country,
      logo,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    if (status === 201) {
      return { data, status };
    } else {
      throw new Error("This brand already exists.");
    }
  } catch (error) {
    if (Axios.isAxiosError(error)) {
      throw Error("Axios " + error.message);
    } else {
      throw Error("DB " + error);
    }
  }
}

export async function updateBrand({ id, name }: BrandProps) {
  const currentId = id;
  const newName = name;

  try {
    const { data, status } = await Axios.put<BrandProps>("/api/brands", {
      id: currentId,
      name: newName,
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
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error occurred";
    }
  }
}

export async function deleteBrand({ id }: BrandProps) {
  const params = { brandId: id, type: "brands" };

  try {
    const { data, status } = await Axios.delete<BrandProps>("/api/brands", {
      data: params,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    console.log(JSON.stringify(data, null, 4));
    console.log(status);

    deleteImage({ id: params.brandId, type: params.type });

    return data;
  } catch (error) {
    if (Axios.isAxiosError(error)) {
      console.log("error message: ", error.message);

      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error occurred";
    }
  }
}
