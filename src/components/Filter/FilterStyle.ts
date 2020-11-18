import styled from "styled-components";

export const FilterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 2rem;
  box-shadow: 0 0 7px 1px rgba(0, 0, 0, 0.1);
`;

export const ClearButton = styled.button`
  position: relative;
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.main_bg_d};
  padding: 3px 2px 3px 20px;
  font-weight: 600;
  cursor: pointer;

  &:after {
    position: absolute;
    content: "";
    left: 0;
    top: 49%;
    transform: rotate(45deg);
    width: 14px;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.main_bg_d};
  }

  &:before {
    position: absolute;
    content: "";
    left: 0;
    top: 49%;
    transform: rotate(-45deg);
    width: 14px;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.main_bg_d};
  }
`;

export const FilterForm = styled.form`
  display: flex;
  width: 70%;

  & > div {
    display: flex;
    margin-right: 20px;
    height: 4rem;
  }
`;

export const FilterInput = styled.input`
  padding: 0 10px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.main_bg_d};
  font-family: inherit;

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

export const FilterSubmit = styled.button`
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

export const InputWrapper = styled.div<{ width: string }>`
  width: ${({ width }) => width || "auto"};
`;