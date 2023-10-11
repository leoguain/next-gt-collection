import React, { useEffect, useState } from "react";

import Axios from "axios";

import { Flex, Text } from "@chakra-ui/react";

import { EditBrandsBox } from "./components/EditBrandBox";
import { AddBrandDrawer } from "./components/AddBrandDrawer";
import { BrandProps } from "types/global";

export const useBrandsList = () => {
  const [brandsList, setBrandsList] = useState<BrandProps[]>([]);

  return {
    brandsList,
    setBrandsList,
  };
};

export const BrandsList = () => {
  const { brandsList, setBrandsList } = useBrandsList();

  useEffect(() => {
    const fetchBrands = async () => {
      const res = await Axios.get("/api/brands");
      setBrandsList(res.data.brands);
      console.log("teste");
    };

    fetchBrands();
  }, []);

  return (
    <React.Fragment>
      <Flex
        bg="secondary.500"
        justifyContent={"space-between"}
        align={"center"}
        p={4}
        borderBottom={"solid 2px #313131"}
      >
        <Text>Montadoras Cadastradas:</Text>
        <AddBrandDrawer />
      </Flex>
      <Flex
        bg={"#474747"}
        alignSelf={"center"}
        justifyContent="center"
        gap={8}
        flexWrap="wrap"
        p={4}
      >
        {brandsList
          .sort((valueA: BrandProps, valueB: BrandProps) =>
            valueA.name < valueB.name ? -1 : 1
          )
          .map((brand: { id: string; name: string }) => (
            <EditBrandsBox key={brand.id} id={brand.id} name={brand.name} />
          ))}
      </Flex>
    </React.Fragment>
  );
};
