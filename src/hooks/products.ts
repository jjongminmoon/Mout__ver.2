import { useInfiniteQuery, useQuery } from "react-query";
import { getProducts } from "../service/products";
import { ProductProps } from "../model/product";
import axios from "axios";

const url = `${import.meta.env.VITE_MOUT_API_KEY}/request`;

export default function useProducts() {
  const { data } = useQuery<ProductProps[]>("products", getProducts);

  return { data };
}

export const useInfinityScrollProducts = ({ size }: any) =>
  useInfiniteQuery(
    "products",
    ({ pageParam = 1 }) =>
      axios.get(url, {
        params: { page: pageParam, size }
      }),
    {
      getNextPageParam: ({ data: { isLastPage, pageNumber } }) =>
        isLastPage ? undefined : pageNumber + 1
    }
  );
