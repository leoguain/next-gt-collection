import React, { useContext, useEffect } from "react";
import { Flex, Spinner } from "@chakra-ui/react";
import { BrandBox } from "./components/EditBrandBox";
import { AddEditDrawer } from "./components/AddEditDrawer";
import { BrandContext } from "contexts/BrandsContext";

export const BrandsList = () => {
  const { fetchBrands, brandsList, isLoading } = useContext(BrandContext);

  useEffect(() => {
    fetchBrands();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <React.Fragment>
      <Flex
        align={"center"}
        bg="secondary.700"
        borderBottom={"solid 1px"}
        borderColor={"brands.500"}
        color={"#aaaaaa"}
        fontSize={["xl", "2xl", "4xl"]}
        justifyContent={"space-between"}
        mt={[2, 4]}
        p={4}
      >
        {`Brands List (${brandsList.length})`}
        <AddEditDrawer />
      </Flex>
      <Flex
        alignSelf={"center"}
        flexWrap="wrap"
        gap={4}
        justifyContent="center"
        my={4}
        p={4}
      >
        {isLoading ? (
          <Spinner
            alignSelf={"center"}
            color="brands.800"
            size="xl"
            speed="0.65s"
            thickness="4px"
            my={20}
          />
        ) : (
          brandsList
            .sort((a, b) => (a.name < b.name ? -1 : 1))
            .map((brand) => (
              <BrandBox
                key={brand.id}
                id={brand.id}
                name={brand.name}
                country={brand.country}
                logo={brand.logo}
              />
            ))
        )}
      </Flex>
    </React.Fragment>
  );
};
