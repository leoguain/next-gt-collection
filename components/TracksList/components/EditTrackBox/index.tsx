import React from "react";
import { Flex, Image } from "@chakra-ui/react";
import { TrackProps } from "types/global";
import { DeleteTrackDialog } from "./components/DeleteTrackDialog";
import { AddEditDrawer } from "../AddEditDrawer";

export const TrackBox = ({
  id,
  name,
  shortName,
  country,
  extension,
}: TrackProps) => {
  return (
    <Flex
      bg={"tracks.800"}
      borderRadius={"sm"}
      color={"#fff"}
      h={20}
      justifyContent={"space-between"}
      key={id}
      p={2}
      w={"lg"}
      _hover={{ bg: "secondary.800", color: "tracks.500" }}
    >
      <Flex align={"center"} gap={4}>
        <Image
          alt={`${shortName} track logo`}
          src={`/api/images?id=interlagos&type=tracks`}
          w="150px"
        />
        <Flex align={"start"} flexDirection={"column"} justifyContent={"start"}>
          <Flex fontSize={name.length > 50 ? "xs" : "lg"}>{name}</Flex>
          <Flex fontSize={"sm"}>{shortName}</Flex>
        </Flex>
      </Flex>

      <Flex>
        <Flex
          align={"center"}
          flexDirection={"column"}
          justifyContent={"center"}
        >
          <Flex>{country}</Flex>
          <Flex>{extension}m</Flex>
        </Flex>
        <Flex align={"center"} flexDirection={"column"} justify={"center"}>
          <AddEditDrawer
            originalId={id}
            originalName={name}
            originalShortName={shortName}
            originalCountry={country}
            originalExtension={extension}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

/*

<EditTrackDialog
            id={id}
            name={name}
            shortName={shortName}
            country={country}
            extension={extension}
          />
          <DeleteTrackDialog id={id} name={name} />

          */
