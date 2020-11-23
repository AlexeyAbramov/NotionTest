import React from "react";
import { useDispatch } from "react-redux";
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
import { changeFilterValue } from "../../redux/contactFilter/action";

const Filter: React.FC = () => {
  const dispatch = useDispatch();

  // TODO: Типизировать обработчик инпута
  const onChangeHandler = (evt) => {
    evt.preventDefault();
    dispatch(changeFilterValue(evt.currentTarget.name, evt.currentTarget.value));
  };

  return (
    <FilterWrapper>
      <FilterForm>
        <InputWrapper width="60%">
          <FilterInput onChange={onChangeHandler} placeholder="Search by full name" type="text" name="name" />
          <FilterSubmit type="submit">
            <SearchImg />
          </FilterSubmit>
        </InputWrapper>
        <OptionSelect onChange={onChangeHandler} name="gender" />
        <InputWrapper width="20%">
          <FilterInput onChange={onChangeHandler} placeholder="Nationality" type="text" name="nat" />
        </InputWrapper>
      </FilterForm>
      <ClearButton>Clear</ClearButton>
    </FilterWrapper>
  );
};

export { Filter };
