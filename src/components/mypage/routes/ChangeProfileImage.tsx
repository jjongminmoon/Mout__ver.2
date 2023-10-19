import styled from "@emotion/styled";
import { doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { dbService } from "../../../service/firebase";
import { useUserData } from "../../../hooks/user";

export default function ChangeProfileImage() {
  const { userData } = useUserData();
  const [image, setImage] = useState<any>(null);

  const uploadImage = (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    return new Promise<void>((resolve) => {
      reader.onload = () => {
        setImage(reader.result || null);
        resolve();
      };
    });
  };

  const handleChangeProfileImage = () => {
    if (image === null) {
      alert("이미지를 선택해주세요");
      return;
    } else {
      if (confirm("프로필 이미지를 변경하시겠습니까?")) {
        const docRef = doc(dbService, "user", userData.id);

        updateDoc(docRef, {
          image: image
        })
          .then(() => {
            alert("프로필 이미지를 변경했습니다");
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
    <Wrapper>
      <SearchButton htmlFor="image-upload">이미지 찾기</SearchButton>
      <input type="file" id="image-upload" accept="imgae/*" onChange={(e) => uploadImage(e)} />
      <SaveButton onClick={handleChangeProfileImage}>
        {image === null ? "업로드 전" : "저장"}
      </SaveButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  margin-left: auto;

  #image-upload {
    display: none;
  }
`;

const SearchButton = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 103px;
  height: 30px;
  border: none;
  border-radius: 6px;
  background-color: black;
  color: white;
  cursor: pointer;
`;

const SaveButton = styled.button`
  margin-left: 5px;
  width: 103px;
  height: 30px;
  border: none;
  border-radius: 6px;
  background-color: black;
  color: white;
`;
