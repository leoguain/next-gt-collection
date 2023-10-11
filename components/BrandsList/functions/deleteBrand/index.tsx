import Axios from "axios";
import { BrandProps } from "types/global";

interface ImageProps {
  id: string;
  type: string;
}

export async function deleteBrand({ id, name }: BrandProps) {
  const params = { id: id, type: "brands" };

  try {
    const delImage = await Axios.delete<ImageProps>("/api/images", {
      data: params,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    delImage;

    console.log(params);

    const { data, status } = await Axios.delete<BrandProps>("/api/brands", {
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

      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error occurred";
    }
  }
}
