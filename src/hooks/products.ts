import { useQuery } from "react-query";
import { getProducts } from "../service/products";
import { ProductProps } from "../model/product";

export default function useProducts() {
  const { data } = useQuery<ProductProps[]>("products", getProducts);

  return { data };
}
