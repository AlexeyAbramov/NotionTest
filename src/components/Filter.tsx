import React from "react";
import styled from "styled-components";
import { ClearButton, FilterWrapper } from "../styled/Filter";
import { ReactComponent as SearchImg } from "../images/search.svg";

const FilterForm = styled.form`
  display: flex;
  width: 70%;

  & > div {
    display: flex;
    margin-right: 20px;
    height: 4rem;
  }
`;

const FilterInput = styled.input`
  padding: 0 10px;
  border: 1px solid ${({ theme }) => theme.colors.main_bg_d};

  &:first-child {
    border-radius: 3px 0 0 3px;
    border-right: none;
  }

  &:last-child {
    border-radius: 0 3px 3px 0;
    border-left: none;
  }

  &:only-child {
    border-radius: 3px;
    border: 1px solid ${({ theme }) => theme.colors.main_bg_d};
  }
`;

const FilterSubmit = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 4rem;
  width: 4rem;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.main_bg_d};
  &:first-child {
    border-radius: 3px 0 0 3px;
  }

  &:last-child {
    border-radius: 0 3px 3px 0;
  }

  & > svg {
    width: 60%;
    height: 60%;
  }
`;

const Filter: React.FC = () => {
  return (
    <FilterWrapper>
      <FilterForm>
        <div>
          <FilterInput placeholder="Search by full name" type="text" name="" id="" />
          <FilterSubmit type="submit">
            <SearchImg />
          </FilterSubmit>
        </div>
        <div>
          <select name="some" id="">
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>
        <div>
          <FilterInput placeholder="Nationality" type="text" />
        </div>
      </FilterForm>
      <ClearButton>Clear</ClearButton>
    </FilterWrapper>
  );
};

export { Filter };
