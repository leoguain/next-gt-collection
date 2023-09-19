// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { BrandsProps } from "types/global";
import { useState } from "react";

export default async function getBrands(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const prisma = new PrismaClient();

  if (req.method === "GET") {
    try {
      const brands = await prisma.brands.findMany();
      res.json({ brands });
    } catch (error) {
      res.status(201).json("No data found.");
      console.log(error);
    }
  } else if (req.method === "POST") {
    try {
      const findBrand = await prisma.brands.findUnique({
        where: {
          id: req.body.id,
        },
      });

      if (!findBrand) {
        const newBrand = await prisma.brands.create({
          data: {
            id: req.body.id,
            name: req.body.name,
          },
          select: {
            id: true,
            name: true,
          },
        });

        res.status(201).json(newBrand);
      } else {
        res.status(203).json("Esta montadora já foi cadastrada.");
      }
    } catch (error) {
      res.status(202).json("Nenhuma informação foi gravada no banco de dados.");
    }
  } else if (req.method === "PUT") {
    try {
      const updateBrand = await prisma.brands.update({
        where: {
          id: req.body.id,
        },
        data: {
          name: req.body.name,
        },
        select: {
          id: true,
          name: true,
        },
      });

      res.status(201).json(updateBrand);
    } catch (error) {
      res.json("No data is updated");
      console.log(error);
    }
  } else if (req.method === "DELETE") {
    try {
      const deleteBrand = await prisma.brands.delete({
        where: {
          id: req.body.id,
        },
      });

      res.status(201).json(deleteBrand);
    } catch (error) {
      res.json("No data is deleted");
      console.log(error);
    }
  } else {
    res.json("No data found");
  }
}

/*
export default async function saveNewBrand(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const prisma = new PrismaClient();

  try {
    const profile = await prisma.brands.create({
      data: {
        id: "mazda",
        name: "Mazda",
      },
    });
  } catch (error) {
    console.log(error);
  }
  res.status(200).json({ name: "John Doe" });
}
*/
