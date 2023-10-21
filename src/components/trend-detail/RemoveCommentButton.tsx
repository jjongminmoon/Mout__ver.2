import styled from "@emotion/styled";
import { BiX } from "react-icons/bi";
import { useParams } from "react-router-dom";
import { arrayRemove, doc, updateDoc } from "firebase/firestore";
import { dbService } from "../../service/firebase";
import { CommentsProps } from "../../model/trend";

export default function RemoveCommentButton({ comment }: { comment: CommentsProps }) {
  const { id } = useParams();

  const handleRemoveComment = (comment: CommentsProps) => {
    const docRef = doc(dbService, "trend", String(id));

    updateDoc(docRef, {
      comments: arrayRemove(comment)
    });
  };

  return (
    <RemoveButton onClick={() => handleRemoveComment(comment)}>
      <BiX />
    </RemoveButton>
  );
}

const RemoveButton = styled.button`
  border: none;
  background-color: transparent;
  margin-left: auto;
  font-size: 18px;
`;
