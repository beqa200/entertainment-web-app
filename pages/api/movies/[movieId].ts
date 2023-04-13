import { NextApiRequest, NextApiResponse } from "next";
import { connectDB, Movie, User } from "../_db";
import verifyToken from "../_verifyToken";

connectDB();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  //get movieId from query
  const { movieId } = req.query;

  //find movie in db with that id
  const movie = await Movie.findById(movieId);

  if (req.method == "GET") {
    try {
      res.status(200).json(movie);
    } catch (err) {
      res.status(400).json("Bad Request");
    }
  } else if (req.method == "PUT" && movie) {
    //check if token is valid
    if (verifyToken(req)) {
      //get userid from verified token
      const userId = verifyToken(req);

      //find user with that id
      const user = await User.findById(userId);

      //add or delete movies from user's bookmarked list
      if (req.body.isBookmarked) {
        user.bookmarkedMovies.push(movieId);
      } else {
        user.bookmarkedMovies.splice(user.bookmarkedMovies.indexOf(movieId), 1);
      }

      //save user's updated info
      await user.save();
      res.status(200).json(user.bookmarkedMovies);
    } else {
      res.status(400).send("Bad request");
    }
  }
}
