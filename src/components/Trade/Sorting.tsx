import styled from "@emotion/styled";
import { SetStateAction, useState } from "react";
import { MdArrowDropUp, MdArrowDropDown } from "react-icons/md";
import { sortingList } from "../common/mapData";

type Props = {
  selectedSorting: string;
  setSelectedSorting: React.Dispatch<SetStateAction<string>>;
};

export default function Sorting({ selectedSorting, setSelectedSorting }: Props) {
  const [openBox, setOpenBox] = useState(false);

  return (
    <SortingBar>
      <SelectBox onClick={() => setOpenBox(!openBox)}>
        <span>{selectedSorting}</span>
        {openBox ? <MdArrowDropUp className="arrow" /> : <MdArrowDropDown className="arrow" />}

        {openBox && (
          <DropDownList>
            {sortingList.map(({ sorting }, index) => (
              <p key={index} onClick={() => setSelectedSorting(sorting)}>
                {sorting}
              </p>
            ))}
          </DropDownList>
        )}
      </SelectBox>
    </SortingBar>
  );
}

const SortingBar = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  font-size: 14px;
  margin-left: auto;
  border: none;
  background-color: white;
`;

const SelectBox = styled.button`
  display: flex;
  align-items: center;
  gap: 2px;
  border: none;
  background-color: white;

  .arrow {
    font-size: 20px;
  }
`;

const DropDownList = styled.div`
  position: absolute;
  top: 30px;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  z-index: 30;
  background-color: white;
  padding: 15px;
  border-radius: 8px;
  border: 1px solid #ccc;
  box-shadow: 3px 3px 5px 0 rgba(0, 0, 0, 0.1);
`;
