import { useQuery } from "@tanstack/react-query";
import { GET_PRODUCTS } from "../constants/query";
import * as products from "../services/products";
export const useProduct = () => {
  return useQuery([GET_PRODUCTS], products.getProducts);
};
