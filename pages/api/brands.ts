// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

export default async function getBrands(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const prisma = new PrismaClient();
      const brands = await prisma.brands.findMany();

      prisma.$disconnect;

      res.status(201).json({ brands });
    } catch (error) {
      res.status(401).json("No data found.");
      console.log(error);
    }
  } else if (req.method === "POST") {
    try {
      const prisma = new PrismaClient();

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
            country: req.body.country,
            logo: req.body.logo,
          },
          select: {
            id: true,
            name: true,
          },
        });

        prisma.$disconnect;
        res.status(201).json(newBrand);
      } else {
        prisma.$disconnect;
        res.status(203).json("This brand has already been registered.");
      }
    } catch (error) {
      res.status(401).json("No information was written to the database.");
    }
  } else if (req.method === "PUT") {
    try {
      const prisma = new PrismaClient();

      const updateBrand = await prisma.brands.update({
        where: {
          id: req.body.id,
        },
        data: {
          name: req.body.name,
          country: req.body.country,
          logo: req.body.logo,
        },
        select: {
          id: true,
          name: true,
        },
      });

      prisma.$disconnect;

      res.status(201).json(updateBrand);
    } catch (error) {
      res.status(401).json("No data is updated");
      console.log(error);
    }
  } else if (req.method === "DELETE") {
    try {
      const prisma = new PrismaClient();

      const deleteBrand = await prisma.brands.delete({
        where: {
          id: req.body.id,
        },
      });

      prisma.$disconnect;

      res.status(201).json(deleteBrand);
    } catch (error) {
      res.status(401).json("No data is deleted");
      console.log(error);
    }
  } else {
    res.json("No data found");
  }
}
