import React, { useEffect, useState, useCallback } from "react";

import Axios from "axios";

import { Flex, Image } from "@chakra-ui/react";
import { BrandProps } from "types/global";
import { EditCarBox } from "./components/EditCarBox";
import { AddCarBox } from "./components/AddCarBox";
import { ListCarBox } from "./components/ListCarBox";

export const CarsList = () => {
  const brandsFile = "/brands/";

  const [brandsList, setBrandsList] = useState<BrandProps[]>([]);

  useEffect(() => {
    const fetchBrands = async () => {
      const res = await Axios.get("/api/brands");
      setBrandsList(res.data.brands);
    };
    fetchBrands();
  }, []);

  const [activeBrand, setActiveBrand] = useState(brandsList[0]);
  const handleBrandClick = useCallback((brand: BrandProps) => {
    setActiveBrand(brand);
  }, []);

  return (
    <Flex mt={16}>
      <Flex
        bg={"secondary.800"}
        gap={2}
        flexFlow={"column"}
        maxH={"xl"}
        maxW={"2xs"}
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
        {brandsList
          .sort((valueA: BrandProps, valueB: BrandProps) =>
            valueA.name < valueB.name ? -1 : 1
          )
          .map((brand: { id: string; name: string }) => (
            <Flex
              key={brand.id}
              justifyContent={"left"}
              gap={4}
              align={"center"}
              color={"secondary.100"}
              p={4}
              alignContent={"center"}
              cursor={"pointer"}
              _hover={{ bg: "secondary.600", color: "#fff" }}
              onClick={() => {
                handleBrandClick(brand);
              }}
            >
              <Image
                alt="brands logo"
                src={brandsFile + brand.id + ".png"}
                width="25px"
              />
              {brand.name}
            </Flex>
          ))}
      </Flex>
      <Flex align={"start"} flexFlow={"column"}>
        {activeBrand && (
          <React.Fragment>
            <AddCarBox id={activeBrand.id} name={activeBrand.name} />
            <ListCarBox id={activeBrand.id} name={activeBrand.name} />
          </React.Fragment>
        )}
      </Flex>
    </Flex>
  );
};

/*
<EditCarBox id={activeBrand.id} name={activeBrand.name} />
*/
