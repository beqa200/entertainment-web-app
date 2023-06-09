import { NextApiRequest, NextApiResponse } from "next";
import { connectDB, Movie } from "../_db";

connectDB();


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "GET") {
    try {
      const movies = await Movie.find();
      res.status(200).json(movies);
    } catch (err) {
      res.status(400).json("Bad Request");
    }
  }
}
