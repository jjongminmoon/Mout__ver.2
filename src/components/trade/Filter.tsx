import styled from "@emotion/styled";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { SetStateAction, useState } from "react";

type Props = {
  title: string;
  selected: string;
  setSelected: React.Dispatch<SetStateAction<string>>;
  data: {
    id: number;
    title: string;
    print: string;
  }[];
};

export default function Filter({ title, selected, setSelected, data }: Props) {
  const [dropDown, setDropDown] = useState(false);

  return (
    <Container>
      <Wrapper>
        <FilterTitle onClick={() => setDropDown(!dropDown)}>
          <p>{title}</p>
          {dropDown ? (
            <MdKeyboardArrowUp className="arrow" />
          ) : (
            <MdKeyboardArrowDown className="arrow" />
          )}
        </FilterTitle>

        {dropDown &&
          data.map(({ id, title, print }) => (
            <CategoryItem
              key={id}
              color={title === selected ? "black" : "var(--mout-gray-m)"}
              fontWeight={title === selected ? "bold" : ""}
              onClick={() => setSelected(title)}
            >
              {print}
            </CategoryItem>
          ))}
      </Wrapper>
    </Container>
  );
}

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-bottom: 1px solid #eee;
`;

const FilterTitle = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  font-size: 15px;
  font-weight: bold;
  border: none;
  background-color: white;

  .arrow {
    font-size: 20px;
  }
`;

const CategoryItem = styled.p<{ color: string; fontWeight: string }>`
  margin-bottom: 20px;
  font-size: 14px;
  font-weight: ${(props) => props.fontWeight};
  border: none;
  background-color: white;
  color: ${(props) => props.color};
  cursor: pointer;
`;
