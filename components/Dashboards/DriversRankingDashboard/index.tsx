import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Line } from "react-chartjs-2";

import React from "react";

import { Flex } from "@chakra-ui/react";
import { borderWidth } from "polished";

const colorArray = [
  "cyan",
  "red",
  "white",
  "lime",
  "orange",
  "pink",
  "purple",
  "lightgreen",
  "lightgray",
  "lightblue",
  "yellow",
  "gold",
  "gray",
  "aquamarine",
];

const Races = [
  {
    idRace: 1,
    trackName: "Tsukuba Circuit",
    trackNick: "Tsukuba",
  },
  {
    idRace: 2,
    trackName: "Autodromo Nazionale di Monza",
    trackNick: "Monza",
  },
  {
    idRace: 3,
    trackName: "Spa-francorchamps Circuit",
    trackNick: "Spa",
  },
  {
    idRace: 4,
    trackName: "Laguna Seca Raceway",
    trackNick: "Laguna",
  },
  {
    idRace: 5,
    trackName: "Mount Panorama Circuit",
    trackNick: "Bathurst",
  },
  {
    idRace: 6,
    trackName: "Barcelona-Catalunya Circuit",
    trackNick: "Catalunha",
  },
  {
    idRace: 7,
    trackName: "Redbull Ring",
    trackNick: "Redbull",
  },
  {
    idRace: 8,
    trackName: "Autódromo de Interlagos",
    trackNick: "Interlagos",
  },
];

const Data = [
  {
    id: 1,
    driverName: "Leonardo Guain Peixinho",
    driverNick: "leoguain",
    results: [1, 5, 5, 4, 1, 7, 4, 3],
  },
  {
    id: 2,
    driverName: "Thomas Penteado",
    driverNick: "NeoCactuar",
    results: [2, 1, 4, 7, 6, 6, 2, 7],
  },
  {
    id: 3,
    driverName: "João Paulo Facci",
    driverNick: "JPFACCI_SPEEDBR",
    results: [3, 4, 1, 2, 3, 3, 5, 6],
  },
  {
    id: 4,
    driverName: "Ednaldo martins",
    driverNick: "Naldo_Martins",
    results: [4, 3, 2, 1, 14, 5, 7, 8],
  },
  {
    id: 5,
    driverName: "Gustavo Viaro",
    driverNick: "Gustavo_Viaro",
    results: [5, 2, 3, 3, 5, 4, 3, 2],
  },
  {
    id: 6,
    driverName: "José Eduardo F Filho",
    driverNick: "Dudufiel_10",
    results: [6, 10, 8, 5, 2, 2, 1, 1],
  },
  {
    id: 7,
    driverName: "Cleber Carlos",
    driverNick: "CLEBER_SPEEDBR",
    results: [14, 12, 10, 13, 8, 9, 11, 9],
  },
  {
    id: 8,
    driverName: "Luis Ferruthio",
    driverNick: "FERRUTH_SPEEDBR",
    results: [10, 6, 6, 6, 4, 8, 6, 4],
  },
  {
    id: 9,
    driverName: "Gerson Garcia",
    driverNick: "Gersão_Hamilton",
    results: [12, 7, 7, 14, 13, 10, 8, 5],
  },
  {
    id: 10,
    driverName: "Eduardo Alecrim",
    driverNick: "Alecrim12",
    results: [9, 8, 14, 12, 11, 11, 13, 14],
  },
  {
    id: 11,
    driverName: "Carlos Godoi",
    driverNick: "TattoBrown",
    results: [13, 14, 13, 11, 12, 14, 14, 12],
  },
  {
    id: 12,
    driverName: "Ricardo Pavanelli",
    driverNick: "MF2_Pava",
    results: [11, 13, 12, 8, 7, 13, 12, 13],
  },
  {
    id: 13,
    driverName: "João Cláudio Pessoa",
    driverNick: "MYTH_joaosof",
    results: [7, 9, 9, 9, 9, 1, 9, 10],
  },
  {
    id: 14,
    driverName: "Ronald Carvalho",
    driverNick: "roonald_f1",
    results: [8, 11, 11, 10, 10, 12, 10, 11],
  },
];

const chartData = {
  labels: Races.map((race) => race.trackNick),

  /*datasets: Data.map((driver, index) => [
    {
      label: driver.driverNick,
      data: driver.results,
      backgroundColor: colorArray[index],
      borderColor: colorArray[index],
      borderWidth: 1,
      tension: 0.1,
    },
  ]),*/

  datasets: [
    {
      label: "leoguain",
      data: [1, 5, 5, 4, 1, 7, 4, 3],
      borderColor: "red",
      borderWidth: 1,
      backgroundColor: "red",
      tension: 0.1,
    },
    {
      label: "NeoCactuar",
      data: [2, 1, 4, 7, 6, 6, 2, 7],
      borderColor: "cyan",
      borderWidth: 1,
      backgroundColor: "cyan",
      tension: 0.1,
    },
    {
      label: "JPFACCI_SPEEDBR",
      data: [3, 4, 1, 2, 3, 3, 5, 6],
      borderColor: "white",
      borderWidth: 1,
      backgroundColor: "white",
      tension: 0.1,
    },
    {
      label: "Naldo_Martins",
      data: [4, 3, 2, 1, 14, 5, 7, 8],
      borderColor: "lime",
      borderWidth: 1,
      backgroundColor: "lime",
      tension: 0.1,
    },
    {
      label: "Gustavo_Viaro",
      data: [5, 2, 3, 3, 5, 4, 3, 2],
      borderColor: "orange",
      borderWidth: 1,
      backgroundColor: "orange",
      tension: 0.1,
    },
    {
      label: "Dudufiel_10",
      data: [6, 10, 8, 5, 2, 2, 1, 1],
      borderColor: "pink",
      borderWidth: 1,
      backgroundColor: "pink",
      tension: 0.1,
    },
    {
      label: "CLEBER_SPEEDBR",
      data: [14, 12, 10, 13, 8, 9, 11, 9],
      borderColor: "purple",
      borderWidth: 1,
      backgroundColor: "purple",
      tension: 0.1,
    },
    {
      label: "FERRUTH_SPEEDBR",
      data: [10, 6, 6, 6, 4, 8, 6, 4],
      borderColor: "lightgreen",
      borderWidth: 1,
      backgroundColor: "lightgreen",
      tension: 0.1,
    },
    {
      label: "Gersão_Hamilton",
      data: [12, 7, 7, 14, 13, 10, 8, 5],
      borderColor: "lightgray",
      borderWidth: 1,
      backgroundColor: "lightgray",
      tension: 0.1,
    },
    {
      label: "Alecrim12",
      data: [9, 8, 14, 12, 11, 11, 13, 14],
      borderColor: "lightblue",
      borderWidth: 1,
      backgroundColor: "lightblue",
      tension: 0.1,
    },
    {
      label: "TattoBrown",
      data: [13, 14, 13, 11, 12, 14, 14, 12],
      borderColor: "yellow",
      borderWidth: 1,
      backgroundColor: "yellow",
      tension: 0.1,
    },
    {
      label: "MF2_Pava",
      data: [11, 13, 12, 8, 7, 13, 12, 13],
      borderColor: "gold",
      borderWidth: 1,
      backgroundColor: "gold",
      tension: 0.1,
    },
    {
      label: "MYTH_joaosof",
      data: [7, 9, 9, 9, 9, 1, 9, 10],
      borderColor: "aquamarine",
      borderWidth: 1,
      backgroundColor: "aquamarine",
      tension: 0.1,
    },
    {
      label: "roonald_f1",
      data: [8, 11, 11, 10, 10, 12, 10, 11],
      borderColor: "gray",
      borderWidth: 1,
      backgroundColor: "gray",
      tension: 0.1,
    },
  ],
};
const options = {
  responsive: true,
  layout: {
    padding: 1,
  },
  plugins: {
    legend: {
      display: true,
      position: "left",
      labels: {
        boxHeight: 10,
        boxWidth: 10,
        color: "#fff",
        font: {
          size: 12,
        },
      },
    },
    title: {
      display: true,
      text: "Copa Clio NOS Results",
      color: "#fff",
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: "white",
        font: {
          size: 12,
        },
      },
    },
    y: {
      reverse: true,
      grid: {
        display: true,
      },
      min: 0,
      max: 15,
      ticks: {
        color: "white",
        padding: 10,
        stepSize: 1,
        callback: function (value: string) {
          return value == "0" || value == "15" ? "" : value + "º";
        },
      },
    },
  },
};

Chart.register(CategoryScale);

export const DriversRankingDashboard = () => {
  console.log(chartData.datasets);
  return (
    <Flex flexDirection={"column"} w="3xl">
      <Flex>Current Championship(s)</Flex>
      <Flex>
        <Line data={chartData} options={options} />
      </Flex>
    </Flex>
  );
};
