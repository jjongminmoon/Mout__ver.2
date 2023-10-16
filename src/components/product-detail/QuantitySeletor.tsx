import styled from "@emotion/styled";
import { SetStateAction } from "react";

type Props = {
  height: string;
  quantity: number;
  setQuantity: React.Dispatch<SetStateAction<number>>;
};

export default function QuantitySelector({ height, quantity, setQuantity }: Props) {
  return (
    <QuantityBox>
      <Button height={height} onClick={() => quantity > 1 && setQuantity(quantity - 1)}>
        -
      </Button>
      <Quantity>{quantity}</Quantity>
      <Button height={height} onClick={() => setQuantity(quantity + 1)}>
        +
      </Button>
    </QuantityBox>
  );
}

const QuantityBox = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
  border: 1px solid var(--mout-gray-s);
  border-radius: 8px;
`;

const Quantity = styled.p`
  width: 40px;
  text-align: center;
`;

const Button = styled.button<{ height: string }>`
  width: 25px;
  height: ${(props) => props.height};
  padding: 5px;
  border: none;
  border-radius: 8px;
`;
