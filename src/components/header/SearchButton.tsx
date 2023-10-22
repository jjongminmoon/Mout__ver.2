import styled from "@emotion/styled";
import SearchBox from "./SearchBox";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";

export default function SearchButton() {
  const [openSearchBox, setOpenSearchBox] = useState(false);

  return (
    <>
      <Wrapper onClick={() => setOpenSearchBox(true)}>
        <Input placeholder="검색어를 입력해 주세요." />
        <div>
          <BiSearch />
        </div>
      </Wrapper>

      {openSearchBox && <SearchBox setOpenSearchBox={setOpenSearchBox} />}
    </>
  );
}

const Wrapper = styled.div`
  position: relative;
  width: 300px;
  height: 38px;
  margin-bottom: 10px;

  div {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 24px;
    color: white;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 8px;
  background-color: hsla(0, 0%, 100%, 0.11);
  margin-top: 5px;
  padding: 0 15px;
`;
