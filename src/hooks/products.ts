import { useQuery } from "react-query";
import { getProducts } from "../service/products";
import { ProductsProps } from "../model/products";

export default function useProducts() {
  const { data } = useQuery<ProductsProps[]>("products", getProducts);

  return { data };
}
