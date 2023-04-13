import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

export default function verifyToken(req: NextApiRequest) {
  const token = req.headers["auth-token"];
  if (!token) return false;

  if (typeof token == "string" && process.env.TOKEN_SECRET)
    try {
      const user = jwt.verify(token, process.env.TOKEN_SECRET);
      if (typeof user == "object") {
        return user._id;
      }
    } catch (err) {
      return false;
    }
}
