import styled from "@emotion/styled";
import { UserInfoProps } from "../../model/user";
import { addDoc, arrayUnion, collection, doc, updateDoc } from "firebase/firestore";
import { dbService } from "../../service/firebase";
import { SetStateAction } from "react";

type Props = {
  userData: UserInfoProps;
  image: any | null;
  tagArr: string[];
  setOpenForm: React.Dispatch<SetStateAction<boolean>>;
};

export default function UploadButton({ userData, image, tagArr, setOpenForm }: Props) {
  const handleUpload = async () => {
    const docRef = doc(dbService, "user", userData.id);
    const coll = collection(dbService, "trend");

    if (userData.nickname === null) {
      alert("닉네임을 먼저 설정해주세요");
      return;
    } else if (userData.image === null) {
      alert("프로필 이미지를 먼저 설정해주세요");
      return;
    } else if (image === null) {
      alert("공유하실 이미지를 첨부해주세요");
      return;
    } else {
      if (confirm("트렌드를 공유하시겠습니까?")) {
        await updateDoc(docRef, {
          posts: arrayUnion({
            image: image
          })
        });
        await addDoc(coll, {
          email: userData.email,
          user_image: userData.image,
          nickname: userData.nickname,
          image: image,
          createdAt: Date.now(),
          tag: tagArr,
          liked: [],
          comments: []
        });

        setOpenForm(false);
        alert("트렌드가 작성되었습니다");
      } else {
        return;
      }
    }
  };

  return <Button onClick={handleUpload}>올리기</Button>;
}

const Button = styled.button`
  width: 100%;
  background-color: black;
  color: white;
  border: none;
  border-radius: 6px;
`;
