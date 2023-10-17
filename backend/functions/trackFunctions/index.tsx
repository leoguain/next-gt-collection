import Axios from "axios";
import { TrackProps } from "types/global";

export async function addTrack({
  id,
  name,
  shortName,
  country,
  extension,
}: TrackProps) {
  try {
    const { data, status } = await Axios.post<TrackProps>("/api/tracks", {
      id,
      name,
      shortName,
      country,
      extension,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    if (status != 201) {
      throw Error("This track already exists.");
    } else {
      return { data, status };
    }
  } catch (error) {
    if (Axios.isAxiosError(error)) {
      throw Error("Axios " + error.message);
    } else {
      throw Error("DB " + error);
    }
  }
}

export async function updateTrack({ id, name }: TrackProps) {
  const currentId = id;
  const newName = name;

  try {
    const { data, status } = await Axios.put<TrackProps>("/api/tracks", {
      id: currentId,
      name: newName,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    console.log(JSON.stringify(data, null, 4));

    console.log(status);

    return data;
  } catch (error) {
    if (Axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error occurred";
    }
  }
}

interface FunctionProps {
  trackId: string;
}

export async function deleteTrack({ trackId }: FunctionProps) {
  const params = { trackId, type: "tracks" };

  try {
    const { data, status } = await Axios.delete<FunctionProps>(
      `/api/${params.type}`,
      {
        data: params,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );

    console.log(JSON.stringify(data, null, 4));
    console.log(status);

    return data;
  } catch (error) {
    if (Axios.isAxiosError(error)) {
      console.log("error message: ", error.message);

      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error occurred";
    }
  }
}
