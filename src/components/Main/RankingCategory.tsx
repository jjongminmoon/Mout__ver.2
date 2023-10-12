import styled from "@emotion/styled";
import { categoryList } from "../Common/commonData";
import { SetStateAction } from "react";

type Props = {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<SetStateAction<string>>;
};

export default function RankingCategory({ selectedCategory, setSelectedCategory }: Props) {
  return (
    <Wrapper>
      {categoryList.map(({ id, title }) => (
        <CategoryItem
          key={id}
          color={id === selectedCategory ? "black" : "#aaaaaa"}
          fontWeight={id === selectedCategory ? "bold" : ""}
          onClick={() => setSelectedCategory(id)}
        >
          {title}
        </CategoryItem>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const CategoryItem = styled.button<{ color: string; fontWeight: string }>`
  margin-top: 10px;
  padding: 5px;
  font-size: 16px;
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight};
  border: none;
  background-color: white;
`;
