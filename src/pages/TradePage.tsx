import styled from "@emotion/styled";
import FilterBar from "../components/Trade/TradeFilterBar";
import useProducts from "../hooks/products";
import commaFormat from "../util/commaFormat";
import { useState } from "react";

export default function TradePage() {
  const { data: products } = useProducts();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");

  return (
    <Section>
      <FilterBar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedBrand={selectedBrand}
        setSelectedBrand={setSelectedBrand}
      />
      <ProductsList>
        {products
          ?.filter(({ category }) => category.includes(selectedCategory))
          .filter(({ brand }) => brand.includes(selectedBrand))
          .map(({ id, image, brand, name_kr, price }) => (
            <Item key={id}>
              <Image src={image} alt={`${name_kr} 제품 이미지`} />
              <Brand>{brand}</Brand>
              <Name>{name_kr}</Name>
              <Price>{commaFormat(price)}원</Price>
              <p className="caption">즉시구매가</p>
            </Item>
          ))}
      </ProductsList>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  width: 1200px;
  margin: 0 auto;
  padding: 60px 0;
`;

const ProductsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 10px;
  width: 100%;
`;

const Item = styled.li`
  width: 100%;
  margin-bottom: 20px;

  .caption {
    color: #aaaaaa;
    font-size: 12px;
  }
`;

const Image = styled.img`
  width: 100%;
  background-color: #f5f5f5;
`;

const Brand = styled.p`
  font-size: 14px;
  font-weight: bold;
  margin: 8px 0;
`;

const Name = styled.p`
  width: 100%;
  height: 38px;
  font-size: 14px;
  color: var(--mout-gray-m);
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 12px;
`;

const Price = styled.p`
  font-size: 16px;
  font-weight: 700;
`;
