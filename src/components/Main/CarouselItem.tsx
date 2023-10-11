import styled from "@emotion/styled";
import commaFormat from "../../util/commaFormat";
import { Link } from "react-router-dom";

type Props = {
  id: number;
  image: string;
  name_kr: string;
  price: number;
};

export default function CarouselItem(props: Props) {
  const { id, image, name_kr, price } = props;

  return (
    <Link to={`/trade/detail/${id}`}>
      <Item>
        <Image>
          <img src={image} alt={`${name_kr} 이미지`} />
        </Image>
        <Name>{name_kr}</Name>
        <div>
          <Price>{commaFormat(price)}원</Price>
          <p className="caption">즉시 구매가</p>
        </div>
      </Item>
    </Link>
  );
}

const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 30px;
  margin-right: 5px;

  .caption {
    color: #aaaaaa;
    font-size: 12px;
  }
`;

const Image = styled.div`
  background-color: #f5f5f5;

  img {
    width: 100%;
  }
`;

const Name = styled.p`
  font-size: 14px;
  color: #666666;
  height: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Price = styled.p`
  font-size: 16px;
  font-weight: 700;
`;
