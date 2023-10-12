import styled from "@emotion/styled";
import Filter from "./Filter";
import { SetStateAction } from "react";
import { brandList, categoryList } from "../Common/commonData";

type Props = {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<SetStateAction<string>>;
  selectedBrand: string;
  setSelectedBrand: React.Dispatch<SetStateAction<string>>;
};

export default function FilterBar({
  selectedCategory,
  setSelectedCategory,
  selectedBrand,
  setSelectedBrand
}: Props) {
  return (
    <Container>
      <Title>필터</Title>
      <Filter
        title="카테고리"
        selected={selectedCategory}
        setSelected={setSelectedCategory}
        data={categoryList}
      />
      <Filter
        title="브랜드"
        selected={selectedBrand}
        setSelected={setSelectedBrand}
        data={brandList}
      />
    </Container>
  );
}

const Container = styled.div`
  min-width: 200px;
  margin-right: 60px;
`;

const Title = styled.p`
  font-size: 20px;
  font-weight: bold;
  padding-bottom: 15px;
  border-bottom: 3px solid black;
`;
