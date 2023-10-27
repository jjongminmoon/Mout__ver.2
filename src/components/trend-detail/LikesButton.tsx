import styled from "@emotion/styled";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import { useUserData } from "../../hooks/user";
import { useParams } from "react-router-dom";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { dbService } from "../../service/firebase";

type Props = {
  likesList: string[];
};

export default function LikesButton({ likesList }: Props) {
  const { userData } = useUserData();
  const { id } = useParams();

  const handleLikes = () => {
    const userDocRef = doc(dbService, "user", userData.id);
    const trendDocRef = doc(dbService, "trend", String(id));

    if (likesList && likesList.includes(userData.id)) {
      updateDoc(userDocRef, {
        likePosts: arrayRemove(String(id))
      });
      updateDoc(trendDocRef, {
        liked: arrayRemove(userData.id)
      });
    } else {
      updateDoc(userDocRef, {
        likePosts: arrayUnion(String(id))
      });
      updateDoc(trendDocRef, {
        liked: arrayUnion(userData.id)
      });
    }
  };

  return (
    <Button onClick={handleLikes}>
      {likesList.includes(userData?.id) ? (
        <IoHeartSharp className="heart-fill" />
      ) : (
        <IoHeartOutline className="heart-empty" />
      )}
    </Button>
  );
}

const Button = styled.button`
  padding: 0;
  margin-top: 5px;
  border: none;
  background-color: transparent;
  font-size: 30px;

  .heart-fill {
    color: red;
  }
`;
