import styled from "@emotion/styled";
import { categoryList } from "../../assets/data/mapData";
import { SetStateAction } from "react";

type Props = {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<SetStateAction<string>>;
};

export default function RankingCategory({ selectedCategory, setSelectedCategory }: Props) {
  return (
    <Wrapper>
      {categoryList.map(({ id, title, print }) => (
        <CategoryItem
          key={id}
          color={title === selectedCategory ? "black" : "#aaaaaa"}
          fontWeight={title === selectedCategory ? "bold" : ""}
          onClick={() => setSelectedCategory(title)}
        >
          {print}
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
