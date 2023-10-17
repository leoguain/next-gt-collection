import type { User } from "./user";
import { Octokit } from "octokit";

import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "lib/session";
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const octokit = new Octokit();

async function loginRoute(req: NextApiRequest, res: NextApiResponse) {
  const { username, password } = await req.body;

  try {
    const prisma = new PrismaClient();

    const findUser = await prisma.users.findFirst({
      where: {
        nickname: username,
      },
    });

    if (findUser) {
      const checkPassword = await prisma.users.findFirst({
        where: {
          nickname: username,
          password: password,
        },
        select: {
          id: true,
          name: true,
        },
      });

      if (checkPassword) {
        const user = {
          isLoggedIn: true,
          login: checkPassword.name,
          avatarUrl: checkPassword.id,
        } as User;

        prisma.$disconnect;

        req.session.user = user;
        await req.session.save();
        res.json(user);
      } else {
        prisma.$disconnect;
        res.status(203).json("Invalid password");
      }
    } else {
      prisma.$disconnect;
      res.status(404).json("User not found");
    }

    /*
    const {
      data: { login, avatar_url },
    } = await octokit.rest.users.getByUsername({ username });

    const user = { isLoggedIn: true, login, avatarUrl: avatar_url } as User;

    req.session.user = user;
    await req.session.save();
    res.json(user);
    */
  } catch (error) {
    res.status(404).json({ message: "No data found." });
    console.log(error);
  }
}

export default withIronSessionApiRoute(loginRoute, sessionOptions);
