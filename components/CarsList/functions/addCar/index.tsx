import Axios from "axios";
import { CarProps } from "types/global";

export async function addCar({
  model,
  year,
  price,
  brandId,
  drivetrain,
  power,
  weight,
  aspiration,
}: CarProps) {
  try {
    const { data, status } = await Axios.post<CarProps>("/api/cars", {
      model: model,
      year: year,
      price: Number(price),
      brandId: brandId,
      drivetrain: drivetrain,
      power: Number(power),
      weight: Number(weight),
      aspiration: aspiration,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    return { data, status };
  } catch (error) {
    if (Axios.isAxiosError(error)) {
      throw Error("Axios " + error.message);
    } else {
      throw Error("DB " + error);
    }
  }
}
