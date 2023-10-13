import styled from "@emotion/styled";
import { SetStateAction, useState } from "react";
import { BiSolidDownArrow, BiX } from "react-icons/bi";
import ModalContainer from "../common/ModalContainer";
import { clothesSizeList, shoesSizeList } from "../common/mapData";

type Props = {
  category: string;
  selectedSize: string;
  setSelectedSize: React.Dispatch<SetStateAction<string>>;
  quantity: number;
  setQuantity: React.Dispatch<SetStateAction<number>>;
};

export default function OptionSelector({
  category,
  selectedSize,
  setSelectedSize,
  quantity,
  setQuantity
}: Props) {
  const [openSizeSelector, setOpenSizeSelector] = useState(false);

  return (
    <Container>
      {category === "acc" || category === "tech" ? (
        <SizeSelectBox>사이즈가 없습니다</SizeSelectBox>
      ) : (
        <SizeSelectBox onClick={() => setOpenSizeSelector(true)}>
          <p>사이즈</p>
          <Size>
            {selectedSize ? selectedSize : "모든 사이즈"}
            <BiSolidDownArrow />
          </Size>
        </SizeSelectBox>
      )}
      <QuantityBox>
        <Button onClick={() => quantity > 1 && setQuantity(quantity - 1)}>-</Button>
        <Quantity>{quantity}</Quantity>
        <Button onClick={() => setQuantity(quantity + 1)}>+</Button>
      </QuantityBox>

      {openSizeSelector && (
        <ModalContainer>
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
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 14px;
  font-weight: bold;
  margin-top: 40px;
`;

const SizeSelectBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 46px;
  padding: 0 20px;
  border: 1px solid var(--mout-gray-s);
  border-radius: 8px;
`;

const Size = styled.p`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const QuantityBox = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid var(--mout-gray-s);
  border-radius: 8px;
`;

const Quantity = styled.p`
  width: 40px;
  text-align: center;
`;

const Button = styled.button`
  width: 25px;
  height: 46px;
  padding: 5px;
  border: none;
  border-radius: 8px;
`;

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
