import React from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { changeFilterValue, resetFilter } from "../../redux/contactFilter/action";
import { RootState } from "../../types/redux";
// TODO: Сделать варианты в text инпутах
const Filter: React.FC = () => {
  const dispatch = useDispatch();
  const filterValues = useSelector((store: RootState) => store.filter);
  // TODO: Типизировать обработчик инпута, добавить debounce
  const onChangeHandler = (evt) => {
    evt.preventDefault();
    const value = evt.currentTarget.value.toLowerCase();
    dispatch(changeFilterValue(evt.currentTarget.name, value));
  };

  const resetForm = () => {
    dispatch(resetFilter());
  };

  return (
    <FilterWrapper>
      <FilterForm>
        <InputWrapper width="60%">
          <FilterInput value={filterValues.name} onChange={onChangeHandler} placeholder="Search by full name" type="text" name="name" />
          <FilterSubmit disabled type="submit">
            <SearchImg />
          </FilterSubmit>
        </InputWrapper>
        <OptionSelect value={filterValues.gender} onChange={onChangeHandler} name="gender" />
        <InputWrapper width="20%">
          <FilterInput value={filterValues.nat} onChange={onChangeHandler} placeholder="Nationality" type="text" name="nat" />
        </InputWrapper>
      </FilterForm>
      <ClearButton onClick={resetForm}>Clear</ClearButton>
    </FilterWrapper>
  );
};

export { Filter };
