import styled from "@emotion/styled";
import SizeSeletorButton from "./SizeSeletorButton";
import QuantitySelector from "./QuantitySeletor";
import PurchaseButton from "./DirectOrderButton";
import AddToCartButton from "./AddToCartButton";
import { UserInfoProps } from "../../model/user";
import { ProductProps } from "../../model/product";
import { SetStateAction, useEffect, useState } from "react";

type Props = {
  userData: UserInfoProps;
  product: ProductProps;
  category: string;
  selectedSize: string;
  setSelectedSize: React.Dispatch<SetStateAction<string>>;
  quantity: number;
  setQuantity: React.Dispatch<SetStateAction<number>>;
};

export default function ProductHeaderBar({
  userData,
  product,
  category,
  selectedSize,
  setSelectedSize,
  quantity,
  setQuantity
}: Props) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  });

  return (
    <Container appearance={scrollPosition > 300 ? "" : "none"}>
      <Wrapper>
        <ProductInfo>
          <Image src={product.image} alt={`${product.name_kr} 제품 이미지`} />
          <div>
            <Brand>{product.brand}</Brand>
            <KrName>{product.name_kr}</KrName>
            <EnName>{product.name_en}</EnName>
          </div>
        </ProductInfo>
        <ActionBar>
          <SizeSeletorButton
            height="56px"
            category={category}
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
          />
          <QuantitySelector height="56px" quantity={quantity} setQuantity={setQuantity} />
          <ButtonWrapper>
            <PurchaseButton height="56px" fontSize="14px" onClick={() => {}} />
            <AddToCartButton
              height="56px"
              fontSize="14px"
              userData={userData}
              product={product}
              selectedSize={selectedSize}
              quantity={quantity}
            />
          </ButtonWrapper>
        </ActionBar>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div<{ appearance: string }>`
  position: fixed;
  left: 0;
  top: 134px;
  width: 100%;
  height: 106px;
  padding: 15px;
  background-color: white;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
  z-index: 99;
  display: ${(props) => props.appearance};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 1200px;
  margin: 0 auto;
`;

const ProductInfo = styled.div`
  display: flex;
  gap: 16px;
`;

const Image = styled.img`
  width: 76px;
  height: 76px;
  background-color: #f5f5f5;
  border-radius: 8px;
`;

const Brand = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

const KrName = styled.p`
  padding-top: 6px;
  font-size: 16px;
  font-weight: bold;
`;

const EnName = styled.p`
  padding-top: 6px;
  font-size: 10px;
  color: var(--mout-gray-s);
`;

const ActionBar = styled.div`
  display: flex;
  margin-left: auto;
  gap: 12px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 6px;
  width: 323px;
`;
