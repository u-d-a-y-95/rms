import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { GET_PRODUCTS } from "../constants/query";
import * as productService from "../services/products";
export const useProduct = () => {
  const client = useQueryClient();
  const { data: products, isLoading: isProductGetLoading } = useQuery(
    [GET_PRODUCTS],
    productService.getProducts
  );

  const { mutate: bookProduct } = useMutation(productService.bookProduct, {
    onSuccess: () => {
      client.invalidateQueries([GET_PRODUCTS]);
    },
  });

  return {
    products,
    isLoading: isProductGetLoading,
    bookProduct,
  };
};
