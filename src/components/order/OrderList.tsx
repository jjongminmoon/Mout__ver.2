import styled from "@emotion/styled";
import commaFormat from "../../util/commaFormat";
import Title from "../commonUI/Title";
import { CartProps } from "../../model/cart";

type Props = {
  cart: CartProps[] | undefined;
};

export default function OrderList({ cart }: Props) {
  const headerList = [
    { id: "count", title: `전체 ${cart?.length}개` },
    { id: "image", title: "" },
    { id: "name", title: "상품명" },
    { id: "option", title: "옵션" },
    { id: "price", title: "판매가" },
    { id: "amount", title: "수량" }
  ];

  return (
    <Wrapper>
      <Title fontSize="18px">상품 정보</Title>
      <Table>
        {headerList.map(({ id, title }) => (
          <Th key={id}>{title}</Th>
        ))}
        {cart &&
          cart.map((product, index) => (
            <tbody>
              <Tr key={index}>
                <Td>{index + 1}</Td>
                <ImageWrapper>
                  <Image src={product.image} alt={`${product.name_kr} 제품 이미지`} />
                </ImageWrapper>
                <Td>
                  <KrName>{product.name_kr}</KrName>
                  <EnName>{product.name_en}</EnName>
                </Td>
                <Td>{product.size}</Td>
                <Td>{commaFormat(product.price)}원</Td>
                <Td>{product.quantity}</Td>
              </Tr>
            </tbody>
          ))}
      </Table>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 40px;
`;

const Table = styled.table`
  width: 100%;
  text-align: center;
  border: 1px solid #ddd;
  margin-top: 10px;
`;

const Th = styled.th`
  border-bottom: 1px solid #ddd;
  padding: 8px 20px 10px 0;
  font-size: 14px;
  font-weight: 400;
`;

const Tr = styled.tr`
  font-size: 14px;
`;

const Td = styled.td`
  padding-right: 20px;
`;

const ImageWrapper = styled.td`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  padding-top: 4px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background-color: #f5f5f5;
`;

const KrName = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
`;

const EnName = styled.p`
  font-size: 12px;
`;
