import styled from "@emotion/styled";
import Title from "../common/Title";
import CarouselUI from "../common/CarouselUI";
import useProducts from "../../hooks/products";
import { ProductProps } from "../../model/product";
import CarouselItem from "../common/CarouselItem";

type Props = {
  product: ProductProps;
};

export default function RelatedProductsCarousel({ product }: Props) {
  const { data: products } = useProducts();

  return (
    <Container>
      <Title fontSize="20px">연관 추천 상품</Title>
      <CarouselUI>
        {products
          ?.filter(({ brand }) => brand === product.brand)
          .map(({ id, image, name_kr, price }, index) => (
            <div key={index}>
              <CarouselItem id={id} image={image} name_kr={name_kr} price={price} />
            </div>
          ))}
      </CarouselUI>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 40px;
`;
