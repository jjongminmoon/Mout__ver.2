import styled from "@emotion/styled";
import { AddressProps, UserInfoProps } from "../../model/user";
import AddressItem from "../commonUI/AddressItem";
import Title from "../commonUI/Title";

export default function AddressInfo({ userData }: { userData: UserInfoProps }) {
  return (
    <Wrapper>
      <Title fontSize="18px">배송 정보</Title>
      <Address>
        {userData.address
          ?.filter((address: AddressProps, index: number) => address && index === 0)
          .map((address: AddressProps) => (
            <AddressItem fontSize="13px" address={address} />
          ))}
      </Address>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 40px;
`;

const Address = styled.div`
  margin-top: 10px;
`;
