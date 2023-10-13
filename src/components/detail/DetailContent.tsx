import styled from "@emotion/styled";
import FavoriteButton from "./FavoriteButton";
import commaFormat from "../../util/commaFormat";
import { ProductProps } from "../../model/product";
import { UserInfoProps } from "../../model/user";

type Props = {
  product: ProductProps;
  userData: UserInfoProps;
};

export default function DetailContent({ product, userData }: Props) {
  return (
    <>
      <Div>
        <Brand>{product.brand}</Brand>
        {userData && <FavoriteButton productId={product.id} />}
      </Div>
      <KrName>{product.name_kr}</KrName>
      <EnName>{product.name_en}</EnName>
      <Price>
        <p className="caption">즉시 구매가</p>
        <p>{commaFormat(product.price)}원</p>
      </Price>
    </>
  );
}

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  margin-bottom: 10px;
`;

const Brand = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

const KrName = styled.p`
  font-size: 22px;
  font-weight: bold;
`;

const EnName = styled.p`
  font-size: 14px;
  color: var(--mout-gray-s);
  margin-top: 10px;
`;

const Price = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-top: 40px;
  padding-bottom: 20px;
  border-bottom: 1px solid #eee;

  .caption {
    font-size: 14px;
    font-weight: 400;
    color: var(--mout-gray-s);
    margin-bottom: 4px;
  }
`;
