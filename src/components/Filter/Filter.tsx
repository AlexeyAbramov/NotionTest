import React from "react";
import {
  ClearButton,
  FilterWrapper,
  FilterForm,
  FilterInput,
  FilterSubmit,
  InputWrapper,
} from "./FilterStyle";
import { ReactComponent as SearchImg } from "../../assets/images/search.svg";
import { OptionSelect } from "../../componentsHelpers/OptionSelect/OptionSelect";

const Filter: React.FC = () => {
  return (
    <FilterWrapper>
      <FilterForm>
        <InputWrapper width="60%">
          <FilterInput placeholder="Search by full name" type="text" />
          <FilterSubmit type="submit">
            <SearchImg />
          </FilterSubmit>
        </InputWrapper>
        <OptionSelect />
        <InputWrapper width="20%">
          <FilterInput placeholder="Nationality" type="text" />
        </InputWrapper>
      </FilterForm>
      <ClearButton>Clear</ClearButton>
    </FilterWrapper>
  );
};

export { Filter };
