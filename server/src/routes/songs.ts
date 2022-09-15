import express, { Router, Request, Response } from "express";
import { sequelize } from "../db/db";
import { Song } from "../db/models/song";

const router: Router = express.Router();

router.get("/song", async (req: Request, res: Response) => {
  const asArray = Object.entries(req.query);
  const filteredArray = asArray.filter((value) => {
    if (value[1] != "" && value[1] != "none") {
      return true;
    }
  });
  const attributes = Object.fromEntries(filteredArray);
  if (attributes) {
    const song = await Song.findAll({
      where: attributes,
    });
    return res.status(200).send(song);
  }
  const songs = await Song.findAll();
  return res.status(200).send(songs);
});

router.get("/song/filters", async (req: Request, res: Response) => {
  try {
    const [artists, metaArtists] = await sequelize.query(
      "SELECT artist FROM Songs"
    );
    const [genres, metaGenres] = await sequelize.query(
      "SELECT genre FROM Songs"
    );
    const [years, metaYears] = await sequelize.query("SELECT year FROM Songs");
    return res.status(200).send({ artists, genres, years });
  } catch (error) {
    res.status(500).send({error: "Server error"})
  }
});

router.post("/song", async (req: Request, res: Response) => {
  const { name, artist, genre, year } = req.body;
  const song = await Song.create({ name, artist, genre, year });
  return res.status(200).send(song);
});

export default router;
