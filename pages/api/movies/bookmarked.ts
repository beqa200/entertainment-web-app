import { NextApiRequest, NextApiResponse } from "next";
import { connectDB, User } from "../_db";
import verifyToken from "../_verifyToken";

connectDB();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "GET") {
    if (verifyToken(req)) {
      const userId = verifyToken(req);
      const user = await User.findById(userId);
      try {
        res.status(200).json(user.bookmarkedMovies);
      } catch (err) {
        res.status(400).json("Bad Request");
      }
    }
  }
}
