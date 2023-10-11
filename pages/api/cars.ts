// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

type ResponseData = {
  message: string;
};

export default async function getCars(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const prisma = new PrismaClient();

  console.log(req.query.brandId);

  if (req.method === "GET") {
    const brand = req.query?.brandId as string;

    try {
      const cars = await prisma.cars.findMany({
        where: {
          brandId: brand,
        },
        orderBy: {
          model: "asc",
        },
      });
      res.json({ cars });
    } catch (error) {
      res.status(201).json({ message: "No data found." });
      console.log(error);
    }
  } else if (req.method === "POST") {
    try {
      const newCar = await prisma.cars.create({
        data: {
          model: req.body.model,
          year: req.body.year,
          price: req.body.price,
          brandId: req.body.brandId,
          drivetrain: req.body.drivetrain,
          power: req.body.power,
          weight: req.body.weight,
          aspiration: req.body.aspiration,
        },
        select: {
          id: true,
          model: true,
          year: true,
          price: true,
          brandId: true,
          drivetrain: true,
          power: true,
          weight: true,
          aspiration: true,
        },
      });

      res.status(201).json(newCar);
    } catch (error) {
      res.status(202).json(error);
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
