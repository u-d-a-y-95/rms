import type { NextApiRequest, NextApiResponse } from "next";
import { data } from "../data";
export const getProducts = (req: NextApiRequest, res: NextApiResponse) => {
  return res.status(200).json(data);
};
