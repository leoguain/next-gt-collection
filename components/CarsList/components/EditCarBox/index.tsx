import React from "react";

import { Flex } from "@chakra-ui/react";
import { DeleteCarDialog } from "./components/DeleteCarDialog";
import { EditCarDialog } from "./components/EditCarDialog";
import { CarProps } from "types/global";
import { CarDataCell } from "../ListCarBox/components/CarDataCell";

export const EditCarBox = ({
  model,
  year,
  price,
  drivetrain,
  power,
  weight,
  aspiration,
  id,
}: CarProps) => {
  const brandsFile = "/brands/";
  const carId = !id ? "000" : id;

  return (
    <Flex
      align={"center"}
      cursor={"pointer"}
      gap={1}
      key={id}
      mx={4}
      _hover={{ bg: "secondary.500" }}
    >
      <CarDataCell cellText={model} cellWidth="16.5em" />
      <CarDataCell cellText={year} cellWidth="4em" />
      <CarDataCell cellText={price.toString()} cellWidth="6em" />
      <CarDataCell cellText={drivetrain} cellWidth="4em" />
      <CarDataCell cellText={power.toString()} cellWidth="6em" />
      <CarDataCell cellText={weight.toString()} cellWidth="6em" />
      <CarDataCell cellText={aspiration} cellWidth="8em" />
      <CarDataCell cellText={carId} cellWidth="0em" />

      <Flex gap={1} ml={2}>
        <EditCarDialog id={carId} name={model} />
        <DeleteCarDialog id={carId} name={model} />
      </Flex>
    </Flex>
  );
};
