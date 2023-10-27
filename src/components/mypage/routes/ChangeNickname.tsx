import styled from "@emotion/styled";
import { useContext, useState } from "react";
import { AllUserContext } from "../../../contexts/AllUserProvider";
import { UserInfoProps } from "../../../model/user";
import { doc, updateDoc } from "firebase/firestore";
import { dbService } from "../../../service/firebase";
import { useUserData } from "../../../hooks/user";

export default function ChangeNickname() {
  const allUser = useContext(AllUserContext);
  const { userData } = useUserData();
  const [changeNickname, setChangeNickname] = useState("");

  const handleChangeNickname = () => {
    if (allUser.map((user: UserInfoProps) => user.nickname).includes(changeNickname)) {
      alert("사용중인 닉네임입니다. 다른 닉네임을 사용해주세요");
      setChangeNickname("");
    } else if (changeNickname === "") {
      alert("닉네임은 한글자 이상으로 변경해주세요");
      setChangeNickname("");
    } else {
      if (confirm("닉네임을 변경하시겠습니까?")) {
        const docRef = doc(dbService, "user", userData.id);
        updateDoc(docRef, {
          nickname: changeNickname
        })
          .then(() => {
            alert("닉네임을 변경했습니다");
            setChangeNickname("");
          })
          .catch((err) => {
            alert(err);
          });
      } else {
        return;
      }
    }
  };

  return (
    userData.nickname === null && (
      <Wrapper>
        <Input
          type="text"
          placeholder="변경할 닉네임"
          value={changeNickname}
          onChange={(e) => setChangeNickname(e.target.value)}
        />
        <Button onClick={handleChangeNickname}>변경</Button>
      </Wrapper>
    )
  );
}

const Wrapper = styled.div`
  display: flex;
  margin-left: auto;
`;

const Input = styled.input`
  padding: 5px 10px;
  border: 1px solid #ddd;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  background-color: #f5f5f5;
`;

const Button = styled.button`
  width: 50px;
  border: none;
  background-color: black;
  color: white;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
`;
