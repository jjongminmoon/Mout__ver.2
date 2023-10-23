import styled from "@emotion/styled";
import AddressItem from "../../commonUI/AddressItem";
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
        addressList?.map((address: AddressProps, index) => (
          <div>
            <AddressItem fontSize="14px" address={address} index={index} />
            <Button onClick={() => removeToAddressList(address)}>삭제</Button>
          </div>
        ))
      ) : (
        <NoResult>등록된 배송지 없음</NoResult>
      )}
    </Container>
  );
}

const Container = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
  font-size: 14px;
`;

const Button = styled.button`
  width: 100%;
  padding: 5px 10px;
  border: none;
  border-radius: 8px;
  background-color: black;
  color: white;
`;

const NoResult = styled.div`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 10px;
`;
