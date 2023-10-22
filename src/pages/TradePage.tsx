import styled from "@emotion/styled";
import FilterBar from "../components/trade/TradeFilterBar";
import useProducts from "../hooks/products";
import commaFormat from "../util/commaFormat";
import Sorting from "../components/trade/Sorting";
import { useState } from "react";
import { Link } from "react-router-dom";
import ProductList from "../components/trade/ProductList";

export default function TradePage() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedSorting, setSelectedSorting] = useState("인기순");

  return (
    <Section>
      <FilterBar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedBrand={selectedBrand}
        setSelectedBrand={setSelectedBrand}
      />
      <Wrapper>
        <Sorting selectedSorting={selectedSorting} setSelectedSorting={setSelectedSorting} />
        <ProductList
          selectedCategory={selectedCategory}
          selectedBrand={selectedBrand}
          selectedSorting={selectedSorting}
        />
      </Wrapper>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  width: 1200px;
  margin: 0 auto;
  padding: 60px 0;
`;

const Wrapper = styled.div``;
