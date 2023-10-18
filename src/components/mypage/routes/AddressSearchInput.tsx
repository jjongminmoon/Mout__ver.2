import styled from "@emotion/styled";
import { useState } from "react";
import ModalContainer from "../../commonUI/ModalContainer";
import DaumPostCode from "react-daum-postcode";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { dbService } from "../../../service/firebase";
import { useUserData } from "../../../hooks/user";

export default function AddressSearchInput() {
  const { userData } = useUserData();
  const [openSearchInput, setOpenSearchInput] = useState(false);
  const [post, setPost] = useState({
    postCode: "",
    postResult: "",
    postName: "",
    postAddressName: "",
    postContact: "",
    postInput: ""
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const type = e.target.name;
    if (type === "name") {
      setPost({
        ...post,
        postName: e.target.value
      });
    } else if (type === "address-name") {
      setPost({
        ...post,
        postAddressName: e.target.value
      });
    } else if (type === "contact") {
      setPost({
        ...post,
        postContact: e.target.value
      });
    } else {
      setPost({
        ...post,
        postInput: e.target.value
      });
    }
  };

  const handleSearchAddress = (data: any) => {
    setPost({
      ...post,
      postCode: data.zonecode,
      postResult: data.address
    });
    setOpenSearchInput(false);
  };

  const addToAddressList = () => {
    if (
      post.postCode === "" ||
      post.postContact === "" ||
      post.postName === "" ||
      post.postAddressName === "" ||
      post.postResult === "" ||
      post.postInput === ""
    ) {
      alert("모든 입력사항은 필수 항목입니다");
    } else {
      const docRef = doc(dbService, "user", userData.id);

      updateDoc(docRef, {
        address: arrayUnion(post)
      })
        .then(() => {
          alert("배송지를 추가했습니다.");
        })
        .catch((err) => alert(err));
    }
  };

  return (
    <>
      <Container>
        <Button onClick={() => setOpenSearchInput(true)}>주소 검색</Button>
        <Button onClick={addToAddressList}>주소 추가</Button>
        <PostInput
          type="text"
          placeholder="이름"
          name="name"
          value={post.postName}
          onChange={handleInput}
        />
        <InputWrapper>
          <PostInput
            type="text"
            placeholder="주소 별칭"
            name="address-name"
            value={post.postAddressName}
            onChange={handleInput}
          />
          <PostInput
            type="text"
            placeholder="연락처 (- 없이 입력)"
            name="contact"
            value={post.postContact}
            onChange={handleInput}
          />
        </InputWrapper>
        <ResultWrapper>
          <PostResult className="post-code">{post.postCode}</PostResult>
          <PostResult className="post-result">{post.postResult}</PostResult>
        </ResultWrapper>
        <PostInput
          type="text"
          placeholder="상세 주소"
          name="detail-address"
          value={post.postInput}
          onChange={handleInput}
        />
      </Container>

      {openSearchInput && (
        <ModalContainer center={true}>
          <PostcodeWrapper>
            <DaumPostCode
              onComplete={handleSearchAddress}
              autoClose={true}
              defaultQuery="판교역로 235"
              className="daum-postcode"
            />
          </PostcodeWrapper>
        </ModalContainer>
      )}
    </>
  );
}

const Container = styled.div`
  margin-top: 40px;
`;

const Button = styled.button`
  height: 35px;
  padding: 0 10px;
  margin-bottom: 10px;
  border: none;
  border-radius: 8px;
  background-color: black;
  color: white;
  margin-right: 10px;
`;

const InputWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const PostInput = styled.input`
  width: 100%;
  height: 35px;
  padding: 5px 20px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

const ResultWrapper = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  height: 35px;
  margin-bottom: 10px;

  .post-code {
    width: 10%;
  }

  .post-result {
    width: 90%;
  }
`;

const PostResult = styled.span`
  height: 35px;
  padding: 5px 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const PostcodeWrapper = styled.div`
  width: 500px;
`;