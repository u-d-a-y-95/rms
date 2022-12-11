import type { NextApiRequest, NextApiResponse } from "next";
import { data } from "../data";
export const getProducts = (req: NextApiRequest, res: NextApiResponse) => {
  return res.status(200).json(data);
};
export const bookProduct = (req: NextApiRequest, res: NextApiResponse) => {
  const payload = JSON.parse(req.body);
  const found = data.find((pro) => pro.code === payload.product);
  console.log(found);
  if (!found)
    return res
      .status(500)
      .json({ message: "product is not found", data: null });
  found.availability = false;
  return res.status(200).json({ message: "success", data: found });
};
