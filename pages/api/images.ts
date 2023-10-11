// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { promises as fsPromises } from "fs";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function getImages(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const brandId = req.body.brandId as String;
    const buffer = req.body.buffer as Buffer;
    const type = req.body.type as String;
    const imageFormat = type === "brands" ? "png" : "jpg";

    try {
      await fsPromises.writeFile(
        `uploads/${type}/${brandId}.${imageFormat}`,
        JSON.stringify(buffer)
      );

      res.status(201).json("Ok");
    } catch (err) {
      console.log(err);
      return "Something went wrong";
    }
  } else if (req.method === "PUT") {
  } else if (req.method === "DELETE") {
    try {
      const selectedId = req.body.id as String;
      const type = req.body.type as String;
      const imageFormat = type === "brands" ? "png" : "jpg";
      const pathFile = `uploads/${type}/${selectedId}.${imageFormat}`;

      const fs = require("fs");
      if (fs.existsSync(pathFile)) {
        await fsPromises.unlink(pathFile);
      }

      res.status(201).json("Ok");
    } catch (err) {
      console.log(err);
      return "Something went wrong";
    }
  } else {
    res.json("Nenhuma operação realizada");
  }
}

/*
      const contents = await fsPromises.readFile(
        `uploads/${type}/${brandId}.png`,
        "utf-8"
      );
      console.log(contents);

      */
