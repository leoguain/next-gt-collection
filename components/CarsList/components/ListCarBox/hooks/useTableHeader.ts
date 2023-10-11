import { useMemo } from "react";

export const useTableHeader = () => {
  const header = useMemo(
    () => [
      {
        id: "1",
        name: "Modelo",
        mWidth: "16.5em",
        width: "16.5em",
      },
      {
        id: "2",
        name: "Ano",
        mWidth: "4em",
        width: "4em",
      },
      {
        id: "3",
        name: "Preço (Cr.)",
        mWidth: "6em",
        width: "6em",
      },
      {
        id: "4",
        name: "Tração",
        mWidth: "4em",
        width: "4em",
      },
      {
        id: "5",
        name: "Força (hp)",
        mWidth: "6em",
        width: "6em",
      },
      {
        id: "6",
        name: "Peso (lb)",
        mWidth: "6em",
        width: "6em",
      },
      {
        id: "7",
        name: "Aspiração",
        mWidth: "8em",
        width: "8em",
      },
      {
        id: "8",
        name: "Id",
        mWidth: "0em",
        width: "0em",
      },
    ],
    []
  );

  return {
    header,
  };
};
