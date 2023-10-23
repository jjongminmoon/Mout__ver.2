import styled from "@emotion/styled";
import commaFormat from "../../../util/commaFormat";
import { CartProps } from "../../../model/cart";
import { arrayRemove, doc, updateDoc } from "firebase/firestore";
import { dbService } from "../../../service/firebase";
import { useUserData } from "../../../hooks/user";
import { ProductProps } from "../../../model/product";
import { Link } from "react-router-dom";

export default function CartList() {
  const { userData } = useUserData();
  const cart: CartProps[] | undefined = userData?.cart;

  const headerList = [
    { id: "count", title: `전체 ${cart?.length}개` },
    { id: "image", title: "" },
    { id: "name", title: "상품명" },
    { id: "option", title: "옵션" },
    { id: "price", title: "판매가" },
    { id: "amount", title: "수량" },
    { id: "remove", title: "삭제" }
  ];

  const removeFromCart = (product: ProductProps) => {
    const docRef = doc(dbService, "user", userData.id);

    if (confirm("선택한 상품을 장바구니에서 삭제하시겠습니까?")) {
      updateDoc(docRef, {
        cart: arrayRemove(product)
      });
    }
  };

  const allRemoveFromCart = () => {
    const docRef = doc(dbService, "user", userData.id);

    if (confirm("장바구니에 있는 상품을 모두 삭제하시겠습니까?")) {
      updateDoc(docRef, {
        cart: []
      })
        .then(() => {
          alert("삭제 되었습니다");
        })
        .catch((err) => console.log(err));
    } else {
      return;
    }
  };

  return (
    <>
      <Container>
        <tbody>
          {headerList.map(({ id, title }) => (
            <Th key={id}>{title}</Th>
          ))}
          {cart && cart?.length > 0 ? (
            cart?.map((product, index) => (
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
                <Td>
                  <RemoveButton onClick={() => removeFromCart(product)}>삭제</RemoveButton>
                </Td>
              </Tr>
            ))
          ) : (
            <Tr>
              <NoResult>장바구니에 상품이 없습니다.</NoResult>
            </Tr>
          )}
        </tbody>
      </Container>
      <ButtonWrapper>
        <Button backgroundColor="var(--mout-button-blue)">
          <Link to="/order">주문 / 결제</Link>
        </Button>
        <Button backgroundColor="var(--mout-button-red)" onClick={allRemoveFromCart}>
          전체 삭제
        </Button>
      </ButtonWrapper>
    </>
  );
}

const Container = styled.table`
  width: 100%;
  text-align: center;
  border: 1px solid #ddd;
  margin-top: 40px;
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
  color: var(--mout-gray-s);
`;

const RemoveButton = styled.button`
  padding: 5px 10px;
  border: 1px solid #ddd;
  background-color: #ccc;
  color: white;
`;

const NoResult = styled.td`
  height: 80px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: right;
  gap: 10px;
`;

const Button = styled.button<{ backgroundColor: string }>`
  padding: 5px 30px;
  margin-top: 20px;
  border: none;
  border-radius: 8px;
  background-color: ${(props) => props.backgroundColor};
  color: white;
`;
