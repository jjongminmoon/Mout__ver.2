import styled from "@emotion/styled";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { dbService } from "../../service/firebase";
import { CartProps } from "../../model/cart";
import { UserInfoProps } from "../../model/user";
import { ProductProps } from "../../model/product";
import { useNavigate } from "react-router-dom";

type Props = {
  height: string;
  fontSize: string;
  userData: UserInfoProps;
  product: ProductProps;
  selectedSize: string;
  quantity: number;
};

export default function AddToCartButton({
  height,
  fontSize,
  userData,
  product,
  selectedSize,
  quantity
}: Props) {
  const cartInfo = { ...product, ...{ size: selectedSize, quantity: quantity } };
  const navigate = useNavigate();

  const addToCart = () => {
    const docRef = doc(dbService, "user", userData.id);
    const sameItem = userData.cart.find(
      (item: CartProps) => item.id === cartInfo.id && item.size === cartInfo.size
    );

    if (userData === null) {
      alert("장바구니는 마우트 회원만 이용가능합니다.");
    } else if (
      selectedSize === "" &&
      (product.category === "shoes" || product.category === "clothes")
    ) {
      alert("사이즈를 선택해주세요.");
      return;
    } else if (sameItem) {
      alert("같은 상품이 장바구니에 있습니다.");
    } else {
      if (confirm("상품을 장바구니에 담으시겠습니까?")) {
        updateDoc(docRef, {
          cart: arrayUnion(cartInfo)
        }).then(() => {
          if (confirm("상품을 장바구니에 담았습니다. 장바구니로 이동하시겠습니까?")) {
            navigate("/mypage/cart");
          } else {
            return;
          }
        });
      }
    }
  };

  return (
    <Button height={height} fontSize={fontSize} onClick={addToCart}>
      장바구니
    </Button>
  );
}

const Button = styled.button<{ height: string; fontSize: string }>`
  width: 100%;
  height: ${(props) => props.height};
  font-size: ${(props) => props.fontSize};
  font-weight: bold;
  color: white;
  text-align: center;
  padding: 11px 0;
  border: none;
  border-radius: 12px;
  background-color: var(--mout-button-red);
`;
