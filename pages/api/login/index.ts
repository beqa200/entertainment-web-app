import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { connectDB, User } from "../_db";

connectDB();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "POST") {
    //Checking if the email exists
    const user = await User.findOne({ email: req.body.email });
    if (!user) res.status(404).json("User not found");

    //Checking if password is correct
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) return res.status(401).json("Incorrect password");

    //Create and assign a token
    if (process.env.TOKEN_SECRET) {
      const expiresIn = 7200;
      const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET, {expiresIn});
      try {
        res.status(200).setHeader("auth-token", token).send(token);
      } catch (err) {
        res.status(400).json("Bad request");
      }
    }
  }
}
