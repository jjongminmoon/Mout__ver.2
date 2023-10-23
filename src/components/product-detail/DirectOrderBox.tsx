import styled from "@emotion/styled";
import ModalContainer from "../commonUI/ModalContainer";
import AddressItem from "../commonUI/AddressItem";
import commaFormat from "../../util/commaFormat";
import { ProductProps } from "../../model/product";
import { useUserData } from "../../hooks/user";
import { AddressProps } from "../../model/user";
import { SetStateAction } from "react";

type Props = {
  product: ProductProps;
  selectedSize: string;
  quantity: number;
  setOpenDirectOrder: React.Dispatch<SetStateAction<boolean>>;
};

export default function DirectOrderBox({
  product,
  selectedSize,
  quantity,
  setOpenDirectOrder
}: Props) {
  const { userData } = useUserData();

  return (
    <ModalContainer center={true}>
      <Container>
        <ProductWrapper>
          <ImageWrapper>
            <Image src={product.image} alt={`${product.name_kr} 제품 이미지`} />
          </ImageWrapper>
          <InfoWrapper>
            <KrName>{product.name_kr}</KrName>
            <EnName>{product.name_en}</EnName>
            <Option>
              <p>사이즈 : {selectedSize}</p> / <p>수량 : {quantity}</p>
            </Option>
            <Price>{commaFormat(product.price)}원</Price>
          </InfoWrapper>
        </ProductWrapper>
        {userData.address
          ?.filter((address: AddressProps, index: number) => address && index === 0)
          .map((address: AddressProps) => (
            <AddressItem fontSize="13px" address={address} />
          ))}
        <PaymentWrapper>
          <p>최종 결제 금액</p>
          <FinalPrice>{commaFormat(product.price)}</FinalPrice>
          <Points>({(product.price * 0.01).toFixed(0)}P 적립)</Points>
        </PaymentWrapper>
        <ButtonWrapper>
          <Button>결제</Button>
          <Button
            onClick={() => {
              setOpenDirectOrder(false);
              alert("즉시 구매가 취소되었습니다");
            }}
          >
            취소
          </Button>
        </ButtonWrapper>
      </Container>
    </ModalContainer>
  );
}

const Container = styled.div`
  width: 600px;
  height: 600px;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
`;

const ProductWrapper = styled.div`
  display: flex;
  padding: 10px;
  border: 2px solid #ddd;
  border-radius: 8px;
`;

const ImageWrapper = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 8px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background-color: #f5f5f5;
`;

const InfoWrapper = styled.div`
  margin-left: 20px;
`;

const KrName = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
`;
const EnName = styled.p`
  font-size: 14px;
  color: var(--mout-gray-s);
  margin-top: 5px;
`;

const Option = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
  font-size: 14px;
`;

const Price = styled.p`
  margin-top: 10px;
  font-size: 20px;
  font-weight: bold;
`;

const PaymentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  margin-top: 20px;
  margin-left: auto;
`;

const FinalPrice = styled.p`
  font-size: 30px;
  font-weight: bold;
`;

const Points = styled.p`
  font-size: 14px;
  color: var(--mout-gray-m);
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 30px;
`;

const Button = styled.button`
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 8px;
  background-color: black;
  color: white;
`;
