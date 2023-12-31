import { useParams } from "react-router-dom";
import { ProductProps } from "../model/product";
import { useQuery } from "react-query";
import { getProducts } from "../service/products";

export default function useFullProduct() {
  const { data } = useQuery<ProductProps[]>("products", getProducts);
  const { id } = useParams();

  const product: ProductProps | undefined = data?.find((data) => data.id === Number(id));

  return { product };
}
