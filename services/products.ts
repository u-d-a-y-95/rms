import { http } from "../utils/http";

export const getProducts = () => {
  return http.get("api/products");
};
