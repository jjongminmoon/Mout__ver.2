import styled from "@emotion/styled";
import SizeSelector from "./SizeSelector";
import { SetStateAction, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

type Props = {
  height: string;
  category: string;
  selectedSize: string;
  setSelectedSize: React.Dispatch<SetStateAction<string>>;
};

export default function SizeSeletorButton({
  height,
  category,
  selectedSize,
  setSelectedSize
}: Props) {
  const [openSizeSelector, setOpenSizeSelector] = useState(false);

  return (
    <>
      {category === "acc" || category === "tech" ? (
        <SizeSelectBox height={height}>사이즈가 없습니다</SizeSelectBox>
      ) : (
        <SizeSelectBox height={height} onClick={() => setOpenSizeSelector(true)}>
          <p>사이즈</p>
          <Size>
            {selectedSize ? selectedSize : "선택"}
            <MdKeyboardArrowDown className="arrow" />
          </Size>
        </SizeSelectBox>
      )}

      {openSizeSelector && (
        <SizeSelector
          category={category}
          setOpenSizeSelector={setOpenSizeSelector}
          setSelectedSize={setSelectedSize}
        />
      )}
    </>
  );
}

const SizeSelectBox = styled.div<{ height: string }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: ${(props) => props.height};
  padding: 0 20px;
  font-size: 14px;
  font-weight: bold;
  border: 1px solid var(--mout-gray-s);
  border-radius: 8px;
  cursor: pointer;

  .arrow {
    font-size: 20px;
  }
`;

const Size = styled.p`
  display: flex;
  align-items: center;
  gap: 5px;
`;
