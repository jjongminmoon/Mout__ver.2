import styled from "@emotion/styled";
import { ProductProps } from "../../model/product";

type Props = {
  searchResult: ProductProps[] | undefined;
};

export default function SearchResult({ searchResult }: Props) {
  return (
    <>
      {searchResult && searchResult.length > 0 ? (
        <Container>
          {searchResult.map(({ id, image, name_kr, name_en }) => (
            <Item key={id}>
              <ImageWrapper>
                <Image src={image} alt={`${name_kr} 제품 이미지`} />
              </ImageWrapper>
              <NameWrapper>
                <KrName>{name_kr}</KrName>
                <EnName>{name_en}</EnName>
              </NameWrapper>
            </Item>
          ))}
        </Container>
      ) : (
        <Container>검색 결과가 없습니다.</Container>
      )}
    </>
  );
}

const Container = styled.ul`
  height: 420px;
  overflow: scroll;
  padding: 10px 0 15px 0;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  height: 42px;
  margin-top: 22px;

  :first-child {
    margin-top: 1px;
  }
`;

const ImageWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 4px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  background-color: #f5f5f5;
`;

const NameWrapper = styled.div`
  margin-left: 15px;
`;

const KrName = styled.p`
  font-size: 14px;
  margin-bottom: 5px;
`;
const EnName = styled.p`
  font-size: 12px;
  color: var(--mout-gray-s);
  padding: 1px 0;
`;
