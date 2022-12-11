import type { NextApiRequest, NextApiResponse } from "next";
import { getProducts } from "../../backend/products";

interface IHandler {
  [key: string]: any;
}
const handler: IHandler = {
  GET: getProducts,
};

export default function Products(
  req: NextApiRequest,
  res: NextApiResponse<any[]>
) {
  const mettod = req.method || "GET";
  return handler[mettod](req, res);
}
