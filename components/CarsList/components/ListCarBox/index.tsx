import React, { useEffect, useState, useCallback } from "react";

import Axios from "axios";

import { Flex, Image } from "@chakra-ui/react";
import { BrandProps, CarProps, CarsProps } from "types/global";
import { EditCarBox } from "../EditCarBox";
import { CarTableHeader } from "./components/CarTableHeader";

export const ListCarBox = ({ id, name }: BrandProps) => {
  const carsFile = "/cars/";

  const [carsList, setCarsList] = useState<CarProps[]>([]);

  useEffect(() => {
    const fetchCars = async () => {
      const { data } = await Axios.get<CarsProps>("/api/cars", {
        params: { brandId: id },
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      setCarsList(data.cars);
      setActiveCar(data.cars[0]);
    };
    fetchCars();
  }, [id]);

  const [activeCar, setActiveCar] = useState(carsList[0]);
  const handleCarClick = useCallback(
    (car: CarProps) => {
      setActiveCar(car);

      console.log(activeCar);
    },
    [activeCar]
  );

  console.log(activeCar);

  return (
    <React.Fragment>
      <Flex
        gap={1}
        flexFlow={"column"}
        mt={2}
        overflowY={"auto"}
        css={{
          "&::-webkit-scrollbar": {
            width: "14px",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "#868686",
            width: "10px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#4d4d4d",
            borderRadius: "2px",
          },
        }}
      >
        {activeCar && (
          <Image
            src={carsFile + activeCar.id + ".jpg"}
            alt="car Image"
            mx={4}
            w={"200px"}
            alignSelf={"center"}
          />
        )}

        <CarTableHeader />
        {carsList.length == 0 ? (
          <Flex color={"#fff"} justifyContent={"center"} mt={16} mx={4}>
            Não há carros cadastrados para essa montadora
          </Flex>
        ) : (
          ""
        )}

        {carsList
          .sort((valueA: CarProps, valueB: CarProps) =>
            valueA.model < valueB.model ? -1 : 1
          )
          .map((car) => (
            <EditCarBox key={car.id} {...car} />
          ))}
      </Flex>
    </React.Fragment>
  );
};
