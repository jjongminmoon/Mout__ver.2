import styled from "@emotion/styled";
import { useNavigate, useParams } from "react-router-dom";
import { deleteDoc, doc } from "firebase/firestore";
import { dbService } from "../../service/firebase";

export default function RemovePostButton() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleRemoveComment = () => {
    const docRef = doc(dbService, "trend", String(id));

    if (confirm("게시물을 삭제하시겠습니까?")) {
      deleteDoc(docRef).then(() => {
        alert("게시물이 삭제되었습니다.");
        navigate("/trend");
      });
    } else {
      return;
    }
  };

  return <Button onClick={handleRemoveComment}>게시물 삭제</Button>;
}

const Button = styled.button`
  width: 100%;
  padding: 5px 10px;
  border: none;
  border-radius: 8px;
  background-color: white;
  font-size: 13px;

  :hover {
    background-color: #ddd;
  }
`;
