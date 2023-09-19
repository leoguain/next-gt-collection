import { useMemo } from "react";
import { MOBILE_BREAKPOINT } from "../../../lib/constants";
import { useWindowSize } from "../../../hooks/useWindowsSize";

export const useHeader = () => {
  const { width } = useWindowSize();

  const menuItems = useMemo(
    () => [
      {
        id: "Início",
        href: "/",
        subItems: [],
      },
      {
        id: "Cadastros",
        href: "/cadastros",
        subItems: [
          {
            id: "Montadoras",
            href: "/montadoras",
          },
          {
            id: "Carros",
            href: "/carros",
          },
          {
            id: "Pilotos",
            href: "/pilotos",
          },
          {
            id: "Pistas",
            href: "/pistas",
          },
        ],
      },
      {
        id: "Campeonatos",
        href: "/campeonatos",
        subItems: [],
      },
      {
        id: "Minha Garagem",
        href: "/garagem",
        subItems: [],
      },
      {
        id: "Resultados",
        href: "/resultados",
        subItems: [],
      },
    ],
    []
  );

  const isMobile = width < MOBILE_BREAKPOINT;

  return {
    menuItems,
    isMobile,
  };
};
