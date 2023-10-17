import React from "react";
import { Flex, Image } from "@chakra-ui/react";
import { DeleteBrandDialog } from "./components/DeleteBrandDialog";
import { AddEditDrawer } from "../AddEditDrawer";
import { File } from "buffer";

type BrandResponse = {
  id: string;
  name: string;
  country: string;
  logo: Buffer;
};

export const BrandBox = ({ id, name, country, logo }: BrandResponse) => {
  //const brandLogo:File = Buffer.from(logo)

  return (
    <Flex
      bg={"brands.800"}
      borderRadius={"sm"}
      color={"#fff"}
      h={20}
      key={id}
      p={2}
      w={72}
      _hover={{ bg: "secondary.800", color: "brands.500" }}
    >
      <Flex align={"center"} gap={4} w={60}>
        <Image
          alt="brands logo"
          src={`/api/images?id=${id}&type=brands`}
          w={["75px"]}
        />

        <Flex
          align={"start"}
          flexDirection={"column"}
          justifyContent={"start"}
          w={52}
        >
          <Flex fontSize={name.length > 15 ? "xs" : "lg"}>{name}</Flex>
          <Flex fontSize={"sm"}>id: {id}</Flex>
          <Flex fontSize={"sm"}>{country}</Flex>
        </Flex>
      </Flex>
      <Flex align={"center"} flexDirection={"column"} justify={"center"}>
        <AddEditDrawer
          originalId={id}
          originalName={name}
          originalCountry={country}
        />
      </Flex>
    </Flex>
  );
};

/*

<DeleteBrandDialog id={id} name={name} />

*/
