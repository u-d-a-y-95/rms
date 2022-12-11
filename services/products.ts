import { http } from "../utils/http";

export const getProducts = () => {
  return http.get("api/products");
};
export const bookProduct = (product: any) => {
  return http.post("api/products/book", product);
};
