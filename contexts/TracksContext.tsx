import axios from "axios";
import { ReactNode, createContext, useContext, useState } from "react";
import { TrackProps } from "types/global";

type TrackContextProps = {
  children: ReactNode;
};

type TrackContextType = {
  tracksList: TrackProps[];
  setTracksList: (newState: TrackProps[]) => void;
  isLoading: boolean;
  setIsLoading: (newState: boolean) => void;
  fetchTracks: () => void;
};

const initialValue = {
  tracksList: [],
  setTracksList: () => {},
  isLoading: false,
  setIsLoading: () => {},
  fetchTracks: () => {},
};

export const TrackContext = createContext<TrackContextType>(initialValue);

export const useTracks = () => {
  return useContext(TrackContext);
};

export const TrackContextProvider = ({ children }: TrackContextProps) => {
  const [tracksList, setTracksList] = useState<TrackProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchTracks = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get("/api/tracks");
      setTracksList(res.data.tracks);

      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    }
  };

  return (
    <TrackContext.Provider
      value={{
        tracksList,
        setTracksList,
        isLoading,
        setIsLoading,
        fetchTracks,
      }}
    >
      {children}
    </TrackContext.Provider>
  );
};
