import styled from "@emotion/styled";
import ModalContainer from "../commonUI/ModalContainer";
import useProducts from "../../hooks/products";
import useDebounce from "../../hooks/debounce";
import SearchResult from "./SearchResult";
import Input from "../commonUI/Input";
import { SetStateAction, useEffect, useState } from "react";
import { ProductProps } from "../../model/product";
import { BiSearch, BiX } from "react-icons/bi";

type Props = {
  setOpenSearchBox: React.Dispatch<SetStateAction<boolean>>;
};

export default function SearchBox({ setOpenSearchBox }: Props) {
  const { data: products } = useProducts();
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState<ProductProps[] | undefined>([]);
  const debounceValue = useDebounce(searchValue);

  useEffect(() => {
    if (debounceValue === "") {
      setSearchResult([]);
    } else {
      setSearchResult(products?.filter((product) => product.name_kr.includes(debounceValue)));
    }
  }, [debounceValue]);

  return (
    <ModalContainer center={false}>
      <Container>
        <BiX className="exit" onClick={() => setOpenSearchBox(false)} />
        <Wrapper>
          <InputWrapper>
            <Input
              type="text"
              width="100%"
              placeholder="제품명으로 검색"
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <BiSearch className="search" />
          </InputWrapper>
          <Count>상품 : {searchResult?.length}</Count>
          <SearchResult searchResult={searchResult} />
        </Wrapper>
      </Container>
    </ModalContainer>
  );
}

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  padding: 40px 40px 60px;
  background-color: white;

  .exit {
    position: absolute;
    top: 39px;
    right: 40px;
    font-size: 50px;
    cursor: pointer;
  }
`;

const Wrapper = styled.div`
  width: 600px;
  margin: 0 auto;
`;

const InputWrapper = styled.div`
  position: relative;

  .search {
    position: absolute;
    top: 14px;
    right: 20px;
    font-size: 22px;
  }
`;

const Count = styled.p`
  font-size: 14px;
  padding: 15px 0;
  border-bottom: 1px solid #ddd;
`;
