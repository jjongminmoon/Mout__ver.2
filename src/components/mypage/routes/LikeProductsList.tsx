import styled from "@emotion/styled";
import useProducts from "../../../hooks/products";
import commaFormat from "../../../util/commaFormat";
import { useUserData } from "../../../hooks/user";
import LikeProductButton from "../../commonUI/LikeProductButton";

export default function LikeProductsList() {
  const { userData } = useUserData();
  const { data: products } = useProducts();
  const likeProducts: number[] | undefined = userData?.likeProducts;

  const headerList = [
    { id: "count", title: `전체 ${likeProducts?.length}개` },
    { id: "image", title: "" },
    { id: "name", title: "상품명" },
    { id: "name", title: "판매가" },
    { id: "heart", title: "좋아요" }
  ];

  return (
    <Container>
      <tbody>
        {headerList.map(({ id, title }) => (
          <Th key={id}>{title}</Th>
        ))}
        {likeProducts && likeProducts?.length > 0 ? (
          products
            ?.filter((product) => likeProducts?.includes(product.id))
            .map((product, index) => (
              <Tr>
                <td>{index + 1}</td>
                <ImageWrapper>
                  <Image src={product.image} />
                </ImageWrapper>
                <td>
                  <KrName>{product.name_kr}</KrName>
                  <EnName>{product.name_en}</EnName>
                </td>
                <td>{commaFormat(product.price)}원</td>
                <td>
                  <LikeProductButton productId={product.id} />
                </td>
              </Tr>
            ))
        ) : (
          <Tr>
            <NoResult>찜한 상품이 없습니다.</NoResult>
          </Tr>
        )}
      </tbody>
    </Container>
  );
}

const Container = styled.table`
  width: 100%;
  text-align: center;
  border: 1px solid #ddd;
  margin-top: 40px;
`;

const Th = styled.th`
  border-bottom: 1px solid #ddd;
  padding: 8px 0 10px 0;
  font-size: 14px;
  font-weight: 400;
`;

const Tr = styled.tr`
  font-size: 14px;
`;

const ImageWrapper = styled.td`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  padding-top: 4px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background-color: #f5f5f5;
`;

const KrName = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
`;

const EnName = styled.p`
  font-size: 12px;
  color: var(--mout-gray-s);
`;

const NoResult = styled.td`
  height: 80px;
`;
