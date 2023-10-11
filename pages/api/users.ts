// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

export default async function getUsers(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const prisma = new PrismaClient();
      const users = await prisma.users.findMany();

      prisma.$disconnect;

      res.status(201).json({ users });
    } catch (error) {
      res.status(201).json("No data found.");
      console.log(error);
    }
  } else if (req.method === "POST") {
    try {
      const prisma = new PrismaClient();

      const findUser = await prisma.users.findUnique({
        where: {
          id: req.body.id,
        },
      });

      if (!findUser) {
        const newUser = await prisma.users.create({
          data: {
            name: req.body.name,
            nickname: req.body.nickname,
            birthDate: req.body.birthDate,
            country: req.body.country,
            state: req.body.state,
          },
          select: {
            id: true,
            name: true,
          },
        });

        prisma.$disconnect;
        res.status(201).json(newUser);
      } else {
        prisma.$disconnect;
        res.status(203).json("Este usuário já foi cadastrado");
      }
    } catch (error) {
      res.status(202).json("Nenhuma informação foi gravada no banco de dados.");
    }
  } else if (req.method === "PUT") {
    try {
      const prisma = new PrismaClient();

      const updateUser = await prisma.users.update({
        where: {
          id: req.body.id,
        },
        data: {
          name: req.body.name,
          nickname: req.body.nickname,
          birthDate: req.body.birthDate,
          country: req.body.country,
          state: req.body.state,
        },
        select: {
          id: true,
          name: true,
          nickname: true,
          birthDate: true,
          country: true,
          state: true,
        },
      });

      prisma.$disconnect;

      res.status(201).json(updateUser);
    } catch (error) {
      res.json("No data is updated");
      console.log(error);
    }
  } else if (req.method === "DELETE") {
    try {
      const prisma = new PrismaClient();

      const deleteUser = await prisma.users.delete({
        where: {
          id: req.body.id,
        },
      });

      prisma.$disconnect;

      res.status(201).json(deleteUser);
    } catch (error) {
      res.json("No data is deleted");
      console.log(error);
    }
  } else {
    res.json("No data found");
  }
}
