import styled from "@emotion/styled";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { useUserData } from "../../hooks/user";
import { dbService } from "../../service/firebase";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

export default function FavoriteButton({ productId }: { productId: number }) {
  const { userData } = useUserData();
  const favoriteList: number[] | undefined = userData.favorite;

  const handleFavorite = () => {
    const docRef = doc(dbService, "user", userData.id);

    if (favoriteList && favoriteList.includes(productId)) {
      updateDoc(docRef, {
        favorite: arrayRemove(productId)
      });
    } else {
      updateDoc(docRef, {
        favorite: arrayUnion(productId)
      });
    }
  };

  return (
    <Container onClick={handleFavorite}>
      {favoriteList && favoriteList.includes(Number(productId)) ? (
        <AiFillHeart className="heart-fill" />
      ) : (
        <AiOutlineHeart />
      )}
    </Container>
  );
}

const Container = styled.div`
  font-size: 27px;
  height: 27px;
  cursor: pointer;

  .heart-fill {
    color: #ff3333;
  }
`;
