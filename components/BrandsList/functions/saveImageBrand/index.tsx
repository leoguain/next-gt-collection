import Axios from "axios";
import { BrandProps } from "types/global";

interface FunctionProps {
  brandId: string;
  buffer: Buffer;
  type: string;
}

interface ImageProps {
  buffer: ArrayBuffer;
  type: string;
  brandId: string;
}

export async function saveImageBrand({ brandId, buffer, type }: FunctionProps) {
  try {
    const { data, status } = await Axios.post<ImageProps>("/api/images", {
      brandId: brandId,
      buffer: buffer,
      type: type,
      headers: { "Content-Type": "multipart/form-data" },
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
