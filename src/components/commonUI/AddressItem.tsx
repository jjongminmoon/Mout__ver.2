import styled from "@emotion/styled";
import { AddressProps } from "../../model/user";

type Props = {
  fontSize: string;
  address: AddressProps;
  index?: number;
};

export default function AddressItem({ fontSize, address, index }: Props) {
  return (
    <Wrapper key={index} fontSize={fontSize}>
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
  );
}

const Wrapper = styled.div<{ fontSize: string }>`
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #ddd;
  font-size: ${(props) => props.fontSize};
`;

const Item = styled.li`
  padding: 10px;
  border: 1px solid #ddd;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;

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
