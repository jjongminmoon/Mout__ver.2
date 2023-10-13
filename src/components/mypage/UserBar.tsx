import styled from "@emotion/styled";
import { useUserData } from "../../hooks/user";
import noImage from "../../../public/images/noImage.webp";
import { useContext, useState } from "react";
import { AllUserContext } from "../../contexts/AllUserProvider";
import { UserInfoProps } from "../../model/user";
import { doc, updateDoc } from "firebase/firestore";
import { dbService } from "../../service/firebase";

export default function UserBar() {
  const allUser = useContext(AllUserContext);
  const { userData: user } = useUserData();
  const [changeNickname, setChangeNickname] = useState("");

  const handleChangeNickname = () => {
    if (window.confirm("닉네임을 변경하시겠습니까?")) {
      if (allUser.map((user: UserInfoProps) => user.nickname).includes(changeNickname)) {
        alert("사용중인 닉네임입니다. 다른 닉네임을 사용해주세요");
        setChangeNickname("");
      } else if (changeNickname === "") {
        alert("닉네임은 한글자 이상으로 변경해주세요");
        setChangeNickname("");
      } else {
        const docRef = doc(dbService, "user", user.id);
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
      }
    } else {
      return;
    }
  };

  return (
    <Container>
      <ImageBox>
        {user.image === null ? (
          <Image src={noImage} alt="유저 이미지 없음" />
        ) : (
          <Image src={user.image} alt="유저 이미지" />
        )}
      </ImageBox>
      <Nickname>{user.nickname === null ? "닉네임을 설정해주세요" : user.nickname}</Nickname>
      <ChangeNickname>
        <Input
          type="text"
          placeholder="변경할 닉네임"
          value={changeNickname}
          onChange={(e) => setChangeNickname(e.target.value)}
        />
        <Button onClick={handleChangeNickname}>변경</Button>
      </ChangeNickname>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 140px;
  padding: 20px 30px;
  font-size: 18px;
  font-weight: bold;
  border: 1px solid #eee;
  border-radius: 16px;
  box-shadow: 0 2px 1px 0 rgba(0, 0, 0, 0.07);
`;

const ImageBox = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 100%;
`;

const Nickname = styled.span`
  padding-left: 10px;
  font-size: 18px;
`;

const ChangeNickname = styled.div`
  display: flex;
  margin-left: auto;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ddd;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
`;

const Button = styled.button`
  width: 50px;
  border: none;
  background-color: black;
  color: white;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
`;
