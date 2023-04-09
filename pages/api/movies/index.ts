import mongoose from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";
import { connectDB, movieSchema } from "../db";

connectDB();
const Movie = mongoose.models.Movie || mongoose.model("Movie", movieSchema);

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
