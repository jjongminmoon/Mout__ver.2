import styled from "@emotion/styled";
import ModalContainer from "../commonUI/ModalContainer";
import { SetStateAction } from "react";
import { BiX } from "react-icons/bi";
import { clothesSizeList, shoesSizeList } from "../../assets/data/mapData";

type Props = {
  category: string;
  setOpenSizeSelector: React.Dispatch<SetStateAction<boolean>>;
  setSelectedSize: React.Dispatch<SetStateAction<string>>;
};

export default function SizeSelector({ category, setOpenSizeSelector, setSelectedSize }: Props) {
  return (
    <ModalContainer center={true}>
      <Grid>
        <BiX className="exit" onClick={() => setOpenSizeSelector(false)} />
        {category === "shoes"
          ? shoesSizeList.map((size, index) => (
              <Item
                key={index}
                onClick={() => {
                  setSelectedSize(size);
                  setOpenSizeSelector(false);
                }}
              >
                {size}
              </Item>
            ))
          : clothesSizeList.map((size, index) => (
              <Item
                key={index}
                onClick={() => {
                  setSelectedSize(size);
                  setOpenSizeSelector(false);
                }}
              >
                {size}
              </Item>
            ))}
      </Grid>
    </ModalContainer>
  );
}

const Grid = styled.ul`
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 10px;
  width: 500px;
  background-color: white;
  padding: 70px 30px 30px 30px;
  border-radius: 10px;
  z-index: 999;

  .exit {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 30px;
    cursor: pointer;
  }
`;

const Item = styled.li`
  text-align: center;
  padding: 20px 10px;
  border: 1px solid #eee;
  border-radius: 8px;
  font-weight: 400;
  cursor: pointer;

  &:hover {
    background-color: #ddd;
  }
`;
