import Axios from "axios";
import { BrandProps } from "types/global";

export async function updateCar({ id, name }: BrandProps) {
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
      // 👇️ error: AxiosError<any, any>
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error occurred";
    }
  }
}
