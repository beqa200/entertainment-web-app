import mongoose from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";
import data from "../_data";
import { connectDB, movieSchema } from "../_db";

connectDB();
const Movie = mongoose.models.Movie || mongoose.model("Movie", movieSchema);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method == "GET") {
    try {
        const movies = await Movie.find();
      res.status(200).send(movies);
    } catch (err) {
      res.status(400).send("Bad Request");
    }
  }
}
