import styled from "@emotion/styled";
import ProfileImage from "../common/ProfileImage";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { dbService } from "../../service/firebase";
import { useUserData } from "../../hooks/user";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { AiOutlineEnter } from "react-icons/ai";

type Props = {
  postId: string;
  image: string;
};

export default function CommentInput({ postId }: Props) {
  const { userData } = useUserData();
  const { id } = useParams();
  const [comment, setComment] = useState("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setComment(e.target.value);
  };

  const handleWriteComment = () => {
    const userDocRef = doc(dbService, "user", userData.id);
    const trendDocRef = doc(dbService, "trend", String(id));

    updateDoc(userDocRef, {
      comments: arrayUnion({
        id: postId
      })
    });
    updateDoc(trendDocRef, {
      comments: arrayUnion({
        user_image: userData.image,
        nickname: userData.nickname,
        comment: comment,
        createdAt: Date.now()
      })
    });

    setComment("");
  };

  const handleEnter = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleWriteComment();
    }
  };

  return (
    <Wrapper>
      <ProfileImage size="44px" userImage={userData?.image} alternate={userData?.nickname} />
      <Input
        placeholder="댓글을 작성해주세요..."
        onChange={handleInput}
        onKeyDown={(e) => handleEnter(e)}
      />
      <Button>
        <AiOutlineEnter onClick={handleWriteComment} />
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  gap: 10px;
  width: 100%;
  margin-top: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 11px;
  border: 1px solid #ddd;
  border-radius: 15px;
  background-color: #f5f5f5;
`;

const Button = styled.div`
  position: absolute;
  top: 9px;
  right: 15px;
  font-size: 20px;
  color: var(--mout-gray-m);
  cursor: pointer;
`;
