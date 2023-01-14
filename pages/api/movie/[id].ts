import { MovieDetailType } from "./../../../types/movieTypes";
import { getSingleMovie, getSingleTV } from "../../../services/data";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { id, type } = req.query;

    if (id) {
      const response =
        type === "movie"
          ? await fetch(getSingleMovie(id))
          : await fetch(getSingleTV(id));
      const data = await response.json();
      res.status(200).json(data);
    }
  } catch (err) {
    res.status(500).json({ message: "faild to load data" });
  }
}
