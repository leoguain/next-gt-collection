import axios from "axios";
import { ImageProps } from "types/global";

interface FunctionProps {
  id: string;
  image?: File;
  type: string;
}

export async function saveImage({ id, image, type }: FunctionProps) {
  if (!image) return;

  try {
    const buffer = Buffer.from(await image.arrayBuffer());

    const response = await axios.post<ImageProps>("/api/images", {
      id,
      buffer,
      type,
      headers: { "Content-Type": "multipart/form-data" },
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw Error("Axios " + error.message);
    } else {
      throw Error("DB " + error);
    }
  }
}

export async function deleteImage({ id, type }: FunctionProps) {
  const params = { id, type };

  try {
    const response = await axios.delete<FunctionProps>("/api/images", {
      data: params,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error occurred";
    }
  }
}
