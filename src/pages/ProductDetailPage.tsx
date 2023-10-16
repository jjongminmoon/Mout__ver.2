import styled from "@emotion/styled";
import { useUserData } from "../hooks/user";
import { useState } from "react";
import DetailContent from "../components/product-detail/DetailContent";
import useFullProduct from "../hooks/product";
import SizeSeletorButton from "../components/product-detail/SizeSeletorButton";
import QuantitySelector from "../components/product-detail/QuantitySeletor";
import PurchaseButton from "../components/product-detail/PurchaseButton";
import AddToCartButton from "../components/product-detail/AddToCartButton";
import DeliveryInfo from "../components/product-detail/DeliveryInfo";
import EventBanner from "../components/product-detail/EventBanner";
import ModelInfo from "../components/product-detail/ModelInfo";
import RelatedProductsCarousel from "../components/product-detail/RelatedProductsCarousel";
import ProductHeaderBar from "../components/product-detail/ProductHeaderBar";

export default function ProductDetailPage() {
  const { userData } = useUserData();
  const { product } = useFullProduct();
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  return (
    product && (
      <Section>
        <ProductHeaderBar
          userData={userData}
          product={product}
          category={product.category}
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
          quantity={quantity}
          setQuantity={setQuantity}
        />
        <Container>
          <ImageWrapper>
            <ImageBox>
              <Image src={product.image} alt={`${product.name_kr} 제품 이미지`} />
            </ImageBox>
          </ImageWrapper>
          <Wrapper>
            <DetailContent product={product} userData={userData} />
            <OptionSelector>
              <SizeSeletorButton
                height="46px"
                category={product.category}
                selectedSize={selectedSize}
                setSelectedSize={setSelectedSize}
              />
              <QuantitySelector height="46px" quantity={quantity} setQuantity={setQuantity} />
            </OptionSelector>
            <Space />
            <ButtonBox>
              <PurchaseButton height="62px" fontSize="18px" />
              <AddToCartButton
                fontSize="18px"
                height="62px"
                userData={userData}
                product={product}
                selectedSize={selectedSize}
                quantity={quantity}
              />
            </ButtonBox>
            <DeliveryInfo />
            <EventBanner />
            <ModelInfo product={product} />
          </Wrapper>
        </Container>
        <RelatedProductsCarousel product={product} />
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
  padding-bottom: 50px;
  border-bottom: 1px solid #eee;
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

const OptionSelector = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Space = styled.div`
  height: 12px;
`;

const ButtonBox = styled.div`
  display: flex;
  gap: 12px;
  text-align: center;
`;
