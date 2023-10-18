import styled from "@emotion/styled";
import useProducts from "../../hooks/products";
import Title from "../commonUI/Title";
import CarouselItem from "../commonUI/CarouselItem";
import CarouselUI from "../commonUI/CarouselUI";
import RankingCategory from "./RankingCategory";
import { useState } from "react";

export default function RankingCarousel() {
  const { data: products } = useProducts();
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <Container>
      <Title fontSize="32px">트레이드 TOP 20</Title>
      <RankingCategory
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <CarouselUI>
        {products
          ?.filter(({ category }) => category.includes(selectedCategory))
          .sort((a, b) => b.salesVolume - a.salesVolume)
          .slice(0, 20)
          .map(({ id, image, name_kr, price }, index) => (
            <Wrapper key={id}>
              <CarouselItem id={id} image={image} name_kr={name_kr} price={price} />
              <RankNumber>{index + 1}</RankNumber>
            </Wrapper>
          ))}
      </CarouselUI>
    </Container>
  );
}

const Container = styled.div`
  padding: 60px 0;
`;

const Wrapper = styled.div`
  position: relative;
`;

const RankNumber = styled.p`
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 15px;
  background-color: white;
  font-weight: bold;
`;
