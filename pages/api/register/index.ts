import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import { connectDB, User } from "../_db";

connectDB();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "POST") {
    // Checking if the user is already in the database
    const emailExists = await User.findOne({ email: req.body.email });
    if (emailExists) return res.status(409).json("Email already exists");

    //Hashing password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //Creating data and save it at mongoDB
    const user = new User({
      email: req.body.email,
      password: hashedPassword,
      bookmarkedMovies: [],
    });
    try {
      await user.save();
      return res.status(201).json("Register successfully");
    } catch (err) {
      return res.status(400).send("Bad Request");
    }

    //await User.deleteMany({})
  }
}
