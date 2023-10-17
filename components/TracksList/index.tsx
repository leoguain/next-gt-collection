import React, { useContext, useEffect } from "react";
import { Flex, Spinner } from "@chakra-ui/react";

import { TrackBox } from "./components/EditTrackBox";
import { TrackContext } from "contexts/TracksContext";
import { AddEditDrawer } from "./components/AddEditDrawer";

export const TracksList = () => {
  const { fetchTracks, tracksList, isLoading } = useContext(TrackContext);

  useEffect(() => {
    fetchTracks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <React.Fragment>
      <Flex
        align={"center"}
        bg="secondary.700"
        borderBottom={"solid 1px"}
        borderColor={"tracks.500"}
        color={"#aaaaaa"}
        fontSize={"4xl"}
        justifyContent={"space-between"}
        mt={4}
        p={4}
      >
        {`Tracks List (${tracksList.length})`}
        <AddEditDrawer />
      </Flex>
      <Flex
        alignItems={"center"}
        flexWrap="wrap"
        gap={4}
        justifyContent="center"
        my={4}
        p={4}
      >
        {tracksList.length === 0 ? (
          <Spinner
            alignSelf={"center"}
            color="tracks.800"
            size="xl"
            speed="0.65s"
            thickness="4px"
            my={20}
          />
        ) : (
          tracksList
            .sort((a, b) => (a.name < b.name ? -1 : 1))
            .map((track) => (
              <TrackBox
                key={track.id}
                id={track.id}
                name={track.name}
                shortName={track.shortName}
                country={track.country}
                extension={track.extension}
              />
            ))
        )}
      </Flex>
    </React.Fragment>
  );
};
