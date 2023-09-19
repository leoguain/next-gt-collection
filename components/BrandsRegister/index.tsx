import React, { useCallback, useEffect, useState } from "react";

import Axios from "axios";

import {
  Flex,
  Text,
  List,
  ListItem,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from "@chakra-ui/react";
import { BrandProps } from "../../types/global";

import { darken, lighten } from "polished";
import { RegisterForm } from "./components/RegisterForm";

type LicencasPropsDb = {
  id: string;
  name: string;
};

export const BrandsRegister = () => {
  const [brandsList, setBrandsList] = useState<LicencasPropsDb[]>([]);

  useEffect(() => {
    const fetchBrands = async () => {
      const res = await Axios.get("/api/brands");
      setBrandsList(res.data.brands);
    };
    fetchBrands();
  }, []);

  const [activeBrand, setActiveBrand] = useState(brandsList[0]);

  const listItemClick = useCallback((brand: BrandProps) => {
    setActiveBrand(brand);
  }, []);

  console.log(brandsList[0]);

  return (
    <React.Fragment>
      <Flex>
        <Flex bg={"secondary.500"} flexDirection={"column"} w={"2xs"}>
          <Text align={"center"} py={2} bg={"secondary.400"}>
            Marcas cadastradas:
          </Text>
          <Flex
            bg={"secondary.400"}
            w="4xs"
            p={4}
            gap={4}
            maxH={"md"}
            overflowY={"auto"}
            overflowX={"hidden"}
            css={{
              "&::-webkit-scrollbar": {
                width: "8px",
              },
              "&::-webkit-scrollbar-track": {
                backgroundColor: lighten(0.1, "#474747"),
                width: "8px",
              },
              "&::-webkit-scrollbar-thumb": {
                background: darken(0.2, "#474747"),
                width: "100px",
                borderRadius: "10px",
              },
            }}
          >
            <List>
              {brandsList
                .sort((valueA: BrandProps, valueB: BrandProps) =>
                  valueA.name < valueB.name ? -1 : 1
                )
                .map((brand: { id: string; name: string }) => (
                  <ListItem
                    key={brand.id}
                    value={brand.id}
                    w="3xs"
                    color={"gray.300"}
                    cursor={"pointer"}
                    borderBottom={"solid 1px gray"}
                    _hover={{ color: "#fff", bg: darken(0.2, "#474747") }}
                    onClick={() => {
                      listItemClick(brand);
                    }}
                  >
                    {brand.name}
                  </ListItem>
                ))}
            </List>
          </Flex>
        </Flex>
        {activeBrand && <RegisterForm {...activeBrand} />}
      </Flex>
    </React.Fragment>
  );
};
