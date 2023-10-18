import styled from "@emotion/styled";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { useUserData } from "../../hooks/user";
import { dbService } from "../../service/firebase";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";

export default function LikeProductButton({ productId }: { productId: number }) {
  const { userData } = useUserData();
  const likeProducts: number[] | undefined = userData.likeProducts;

  const handleLikeProduct = () => {
    const docRef = doc(dbService, "user", userData.id);

    if (likeProducts && likeProducts.includes(productId)) {
      updateDoc(docRef, {
        likeProducts: arrayRemove(productId)
      });
    } else {
      updateDoc(docRef, {
        likeProducts: arrayUnion(productId)
      });
    }
  };

  return (
    <Wrapper onClick={handleLikeProduct}>
      {likeProducts && likeProducts.includes(Number(productId)) ? (
        <IoHeartSharp className="heart-fill" />
      ) : (
        <IoHeartOutline />
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-size: 27px;
  height: 27px;
  cursor: pointer;

  .heart-fill {
    color: #ff3333;
  }
`;
