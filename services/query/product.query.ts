import { QueryClient } from "@tanstack/react-query";
import { GET_PRODUCTS } from "../../constants/query";
import * as products from "../products";

export const getProducts = (client: QueryClient) => {
  return client.prefetchQuery([GET_PRODUCTS], products.getProducts);
};
