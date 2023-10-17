import { useMemo } from "react";
import { MOBILE_BREAKPOINT } from "../../../lib/constants";
import { useWindowSize } from "../../../hooks/useWindowsSize";

export const useHeader = () => {
  const { width } = useWindowSize();

  const menuItems = useMemo(
    () => [
      {
        id: "home",
        title: "Home",
        href: "/",
        subItems: [],
      },
      {
        id: "registrations",
        title: "Registrations",
        href: "/cadastros",
        subItems: [
          {
            id: "driversAI",
            title: "AI Drivers",
            href: "/pilotos",
          },
          {
            id: "brands",
            title: "Brands",
            href: "/montadoras",
          },
          {
            id: "cars",
            title: "Cars",
            href: "/carros",
          },

          {
            id: "tracks",
            title: "Tracks",
            href: "/pistas",
          },
        ],
      },
      {
        id: "championships",
        title: "Championships",
        href: "/campeonatos",
        subItems: [],
      },
      {
        id: "garage",
        title: "My garage",
        href: "/garagem",
        subItems: [],
      },
      {
        id: "results",
        title: "Results",
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
