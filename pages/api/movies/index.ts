import { NextApiRequest, NextApiResponse } from "next";
import data from "../_data";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method == "GET") {
    try {
      res.status(200).send(data);
    } catch (err) {
      res.status(400).send("Bad Request");
    }
  }
}
