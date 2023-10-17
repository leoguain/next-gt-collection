import { promises as fsPromises } from "fs";
import type { NextApiRequest, NextApiResponse } from "next";

interface ImageProps {
  id: string;
  buffer?: Buffer;
  type: string;
}

export default async function getImages(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const { id, type } = req.query;
    const imageFormat = type === "cars" ? "jpg" : "png";
    const pathFile = `uploads/${type}/${id}.${imageFormat}`;

    try {
      const fs = require("fs");

      if (fs.statSync(pathFile)) {
        const image = await fsPromises.readFile(pathFile);
        res.setHeader("Content-Type", `image/${imageFormat}`);
        res.status(200).send(image);
      } else {
        res.status(404).json({ error: "Image not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else if (req.method === "POST") {
    const { id, buffer, type }: ImageProps = await req.body;

    if (buffer === undefined) {
      res.status(400).json({ error: "Buffer is missing" });
      return;
    }

    const imageFormat = type === "cars" ? "jpg" : "png";

    try {
      await fsPromises.writeFile(
        `uploads/${type}/${id}.${imageFormat}`,
        Buffer.from(buffer)
      );

      res.status(201).json("Image uploaded successfully");
    } catch (err) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else if (req.method === "DELETE") {
    const { id, type }: ImageProps = await req.body;
    const imageFormat = type === "cars" ? "jpg" : "png";
    const pathFile = `uploads/${type}/${id}.${imageFormat}`;

    try {
      const fs = require("fs");
      if (fs.existsSync(pathFile)) {
        await fsPromises.unlink(pathFile);
        res.status(200).json("Image deleted successfully");
      } else {
        res.status(404).json({ error: "Image not found" });
      }
    } catch (err) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
