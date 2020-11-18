import styled from "styled-components";

export const FilterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 1rem 0;
  padding: 2rem;
  box-shadow: 0 0 7px 1px rgba(0,0,0,0.1);
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
