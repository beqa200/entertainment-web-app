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
  const movie = await Movie.findById(movieId);

  if (req.method == "GET") {
    try {
      res.status(200).send(movie);
    } catch (err) {
      res.status(400).send("Bad Request");
    }
  } else if (req.method == "PUT") {
    movie.isBookmarked = req.body.isBookmarked;
    await movie.save();
    res.status(200).send(movie);
  }
}
