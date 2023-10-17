import { extendTheme, ThemeOverride } from "@chakra-ui/react";
import { lighten, darken } from "polished";

const colorPrimary = "cyan";
const colorSecondary = "#474747";

const colorBrands = "#be90d4";
const colorCars = "#00ff7f";
const colorDriversAI = "#34b9d8";
const colorTracks = "#d4b300";

export const config: ThemeOverride = {
  initialColorMode: "light",
  useSystemColorMode: false,
  fonts: {
    heading: "Lato",
    body: "Lato",
  },
  styles: {
    global: {
      html: {
        scrollBehavior: "smooth",
      },
      body: {
        backgroundColor: "secondary.700",
      },
    },
  },
  colors: {
    primary: {
      50: lighten(0.25, colorPrimary),
      100: lighten(0.2, colorPrimary),
      200: lighten(0.15, colorPrimary),
      300: lighten(0.1, colorPrimary),
      400: lighten(0.05, colorPrimary),
      500: colorPrimary,
      600: darken(0.05, colorPrimary),
      700: darken(0.1, colorPrimary),
      800: darken(0.15, colorPrimary),
      900: darken(0.2, colorPrimary),
    },
    secondary: {
      50: lighten(0.25, colorSecondary),
      100: lighten(0.2, colorSecondary),
      200: lighten(0.15, colorSecondary),
      300: lighten(0.1, colorSecondary),
      400: lighten(0.05, colorSecondary),
      500: colorSecondary,
      600: darken(0.05, colorSecondary),
      700: darken(0.1, colorSecondary),
      800: darken(0.15, colorSecondary),
      900: darken(0.2, colorSecondary),
    },
    brands: {
      50: lighten(0.25, colorBrands),
      100: lighten(0.2, colorBrands),
      200: lighten(0.15, colorBrands),
      300: lighten(0.1, colorBrands),
      400: lighten(0.05, colorBrands),
      500: colorBrands,
      600: darken(0.05, colorBrands),
      700: darken(0.1, colorBrands),
      800: darken(0.15, colorBrands),
      900: darken(0.2, colorBrands),
    },
    cars: {
      50: lighten(0.25, colorCars),
      100: lighten(0.2, colorCars),
      200: lighten(0.15, colorCars),
      300: lighten(0.1, colorCars),
      400: lighten(0.05, colorCars),
      500: colorCars,
      600: darken(0.05, colorCars),
      700: darken(0.1, colorCars),
      800: darken(0.15, colorCars),
      900: darken(0.2, colorCars),
    },
    driversAI: {
      50: lighten(0.25, colorDriversAI),
      100: lighten(0.2, colorDriversAI),
      200: lighten(0.15, colorDriversAI),
      300: lighten(0.1, colorDriversAI),
      400: lighten(0.05, colorDriversAI),
      500: colorDriversAI,
      600: darken(0.05, colorDriversAI),
      700: darken(0.1, colorDriversAI),
      800: darken(0.15, colorDriversAI),
      900: darken(0.2, colorDriversAI),
    },
    tracks: {
      50: lighten(0.25, colorTracks),
      100: lighten(0.2, colorTracks),
      200: lighten(0.15, colorTracks),
      300: lighten(0.1, colorTracks),
      400: lighten(0.05, colorTracks),
      500: colorTracks,
      600: darken(0.05, colorTracks),
      700: darken(0.1, colorTracks),
      800: darken(0.15, colorTracks),
      900: darken(0.2, colorTracks),
    },
  },
  components: {
    Text: {
      baseStyle: {
        color: "#aaaaaa",
      },
    },
    Heading: {
      baseStyle: {
        color: "primary.100",
        fontWeight: "normal",
      },
    },
  },
};

export const theme = extendTheme(config);
