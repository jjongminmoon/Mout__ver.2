import styled from "@emotion/styled";
import { useUserData } from "../../../hooks/user";
import { AddressProps } from "../../../model/user";
import { dbService } from "../../../service/firebase";
import { arrayRemove, doc, updateDoc } from "firebase/firestore";

export default function AddressList() {
  const { userData } = useUserData();
  const addressList: AddressProps[] | undefined = userData.address;

  const removeToAddressList = (address: AddressProps) => {
    const docRef = doc(dbService, "user", userData.id);

    if (confirm("배송지를 삭제하시겠습니까?")) {
      updateDoc(docRef, {
        address: arrayRemove(address)
      })
        .then(() => {
          alert("배송지가 삭제되었습니다.");
        })
        .catch((err) => alert(err));
    } else {
      return;
    }
  };

  return (
    <Container>
      {addressList && addressList.length > 0 ? (
        addressList?.map((address: AddressProps) => (
          <Wrapper>
            <Button onClick={() => removeToAddressList(address)}>삭제</Button>
            <Item>
              <Row>
                <SubTitle>배송지</SubTitle>
                <p>{address.postAddressName}</p>
              </Row>
              <Row>
                <SubTitle>이름 / 연락처</SubTitle>
                <Name>{address.postName} /</Name>
                <p>{address.postContact}</p>
              </Row>
              <Row>
                <SubTitle>주소</SubTitle>
                <PostCode>(우 {address.postCode})</PostCode>
                <p>{address.postResult}</p>
                <p>{address.postInput}</p>
              </Row>
            </Item>
          </Wrapper>
        ))
      ) : (
        <Wrapper>등록된 배송지 없음</Wrapper>
      )}
    </Container>
  );
}

const Container = styled.ul`
  margin-top: 20px;
  font-size: 14px;
`;

const Wrapper = styled.div`
  padding: 10px;
  margin-top: 20px;
  background-color: #f2f2f2;
  border-radius: 10px;
`;

const Item = styled.li`
  border: 1px solid #ddd;
  border-radius: 10px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;

  :last-child {
    border: none;
  }
`;

const SubTitle = styled.p`
  width: 150px;
  padding-left: 10px;
  font-weight: bold;
`;

const Name = styled.p`
  margin-right: 4px;
`;

const PostCode = styled.p`
  padding: 5px;
  margin-right: 10px;
  border-radius: 10px;
  background-color: #ddd;
`;

const Button = styled.button`
  padding: 5px 10px;
  margin-bottom: 10px;
  border: none;
  border-radius: 8px;
  background-color: black;
  color: white;
`;
