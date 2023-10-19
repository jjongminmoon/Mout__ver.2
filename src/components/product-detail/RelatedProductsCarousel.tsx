import styled from "@emotion/styled";
import Title from "../commonUI/Title";
import CarouselUI from "../commonUI/CarouselUI";
import useProducts from "../../hooks/products";
import CarouselItem from "../commonUI/CarouselItem";
import { ProductProps } from "../../model/product";

type Props = {
  product: ProductProps;
};

export default function RelatedProductsCarousel({ product }: Props) {
  const { data: products } = useProducts();

  return (
    <Wrapper>
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
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 40px;
`;
