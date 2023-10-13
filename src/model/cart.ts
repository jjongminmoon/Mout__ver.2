import { ProductProps } from "./product";

export type CartProps = ProductProps & {
  size: string;
  quantity: number;
};
