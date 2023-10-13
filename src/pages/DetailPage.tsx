import styled from "@emotion/styled";
import DetailContent from "../components/detail/DetailContent";
import { useUserData } from "../hooks/user";
import useFullProduct from "../hooks/product";
import { useEffect, useState } from "react";
import OptionSelector from "../components/detail/OptionSelector";
import PurchaseAndCartButton from "../components/detail/PurchaseAndCartButton";
import DeliveryInfo from "../components/detail/DeliveryInfo";
import EventBanner from "../components/detail/EventBanner";
import ModelInfo from "../components/detail/ModelInfo";

export default function DetailPage() {
  const { userData } = useUserData();
  const { product } = useFullProduct();
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  return (
    product && (
      <Section>
        <Container>
          <ImageWrapper>
            <ImageBox>
              <Image src={product.image} alt={`${product.name_kr} 제품 이미지`} />
            </ImageBox>
          </ImageWrapper>
          <Wrapper>
            <DetailContent product={product} userData={userData} />
            <OptionSelector
              category={product.category}
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
              quantity={quantity}
              setQuantity={setQuantity}
            />
            <PurchaseAndCartButton
              userData={userData}
              product={product}
              selectedSize={selectedSize}
              quantity={quantity}
            />
            <DeliveryInfo />
            <EventBanner />
            <ModelInfo product={product} />
          </Wrapper>
        </Container>
      </Section>
    )
  );
}

const Section = styled.section`
  width: 1200px;
  margin: 0 auto;
  padding: 60px 0;
`;

const Container = styled.div`
  display: flex;
  gap: 60px;
  width: 100%;
`;

const ImageWrapper = styled.div`
  position: relative;
`;

const ImageBox = styled.div`
  position: sticky;
  top: 0;
`;

const Image = styled.img`
  width: 570px;
  height: 570px;
  background-color: #f5f5f5;
`;

const Wrapper = styled.div`
  width: 100%;
`;
