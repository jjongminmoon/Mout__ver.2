import styled from "@emotion/styled";
import { ProductProps } from "../../model/product";
import Title from "../common/Title";

type Props = {
  product: ProductProps | undefined;
};

export default function ModelInfo({ product }: Props) {
  //
  const modelInfoList = [
    { title: "브랜드", content: product?.brand },
    { title: "모델번호", content: product?.modelNumber ? product?.modelNumber : "-" },
    { title: "출시일", content: product?.releaseDate ? product?.releaseDate : "-" },
    { title: "상품가격", content: product?.price }
  ];

  return (
    <Wrapper>
      <Title fontSize="20px">상품 정보</Title>
      <Info>
        {modelInfoList.map(({ title, content }) => (
          <Item key={title}>
            <SubTitle>{title}</SubTitle>
            <Content>{content}</Content>
          </Item>
        ))}
      </Info>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 50px;
`;

const Info = styled.ul`
  font-size: 14px;
`;

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const SubTitle = styled.p`
  color: var(--mout-gray-s);
`;

const Content = styled.p`
  font-weight: bold;
`;
