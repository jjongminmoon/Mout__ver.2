import styled from "@emotion/styled";
import Slider from "react-slick";
import { useCallback, useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Props = {
  children: React.ReactNode;
};

export default function CarouselUI({ children }: Props) {
  const slickRef: any | null = useRef(null);
  const prev = useCallback(() => slickRef.current.slickPrev(), []);
  const next = useCallback(() => slickRef.current.slickNext(), []);

  const settings = {
    arrows: false,
    dots: false,
    swipeToSlide: true,
    infinite: true,
    rows: 2,
    slidesPerRow: 5
  };

  return (
    <Container>
      <IoIosArrowBack className="arrow-prev" onClick={prev} />
      <Slider {...settings} ref={slickRef}>
        {children}
      </Slider>
      <IoIosArrowForward className="arrow-next" onClick={next} />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  margin-top: 30px;

  .arrow-prev {
    position: absolute;
    top: 40%;
    left: -80px;
    font-size: 40px;
    cursor: pointer;
  }

  .arrow-next {
    position: absolute;
    top: 40%;
    right: -80px;
    font-size: 40px;
    cursor: pointer;
  }
`;
