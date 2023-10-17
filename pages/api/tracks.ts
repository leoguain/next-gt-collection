import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

export default async function getTracks(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const prisma = new PrismaClient();
      const tracks = await prisma.tracks.findMany();

      prisma.$disconnect;

      res.status(201).json({ tracks });
    } catch (error) {
      res.status(401).json("No data found.");
      console.log(error);
    }
  } else if (req.method === "POST") {
    try {
      const prisma = new PrismaClient();

      const findTrack = await prisma.tracks.findFirst({
        where: {
          name: req.body.name,
        },
      });

      if (!findTrack) {
        const newTrack = await prisma.tracks.create({
          data: {
            name: req.body.name,
            shortName: req.body.shortName,
            country: req.body.country,
            extension: String(req.body.extension),
          },
          select: {
            id: true,
            name: true,
          },
        });

        prisma.$disconnect;
        res.status(201).json(newTrack);
      } else {
        prisma.$disconnect;
        res.status(203).json("This track has already been registered.");
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

      const deleteTrack = await prisma.tracks.delete({
        where: {
          id: req.body.trackId,
        },
      });

      prisma.$disconnect;

      res.status(201).json(deleteTrack);
    } catch (error) {
      res.status(401).json("No data is deleted");
      console.log(error);
    }
  } else {
    res.json("No data found");
  }
}
