import mongoose from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";
import { connectDB, Movie, User } from "../db";
import verifyToken from "../_verifyToken";

connectDB();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { movieId } = req.query;
  const movie = await Movie.findById(movieId);
  if (req.method == "GET") {
    try {
      res.status(200).json(movie);
    } catch (err) {
      res.status(400).json("Bad Request");
    }
  } else if (req.method == "PUT" && movie) {
    if (verifyToken(req)) {
      const userId = verifyToken(req);
      const user = await User.findById(userId);

      movie.isBookmarked = req.body.isBookmarked;
      if (req.body.isBookmarked) {
        user.bookmarkedMovies.push(movieId);
      } else {
        user.bookmarkedMovies.splice(user.bookmarkedMovies.indexOf(movieId), 1);
      }

      await user.save();
      await movie.save();
      res.status(200).json(user.bookmarkedMovies);
    } else {
      res.status(400).send("Bad request");
    }
  }
}
