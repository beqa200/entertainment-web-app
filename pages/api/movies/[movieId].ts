import mongoose from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";
import { connectDB, movieSchema } from "../_db";

connectDB();

const Movie = mongoose.models.Movie || mongoose.model("Movie", movieSchema);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { movieId } = req.query;

  if (req.method == "GET") {
    try {
      const movie = await Movie.findById(movieId);
      res.status(200).send(movie);
    } catch (err) {
      res.status(400).send("Bad Request");
    }
  }
}
