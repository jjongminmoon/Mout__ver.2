import styled from "@emotion/styled";
import useProducts from "../../hooks/products";
import Title from "../Common/Title";
import CarouselItem from "./CarouselItem";
import CarouselUI from "./CarouselUI";

export default function NewCarousel() {
  const { data: products } = useProducts();

  return (
    <Container>
      <Title fontSize="32px">신규 발매</Title>
      <CarouselUI>
        {products
          ?.filter(({ releaseDate }) => releaseDate.includes("2023"))
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
  padding: 60px 0;
`;