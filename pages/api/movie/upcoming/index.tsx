import { upcomingMovies } from "../../../../services/data";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await fetch(upcomingMovies());
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: "faild to load data" });
  }
}
