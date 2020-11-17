import styled from "styled-components";

export const RadioBlockWrapper = styled.div`
  display: flex;
  border: 1px solid #cccccc;
  border-radius: 3px;
  overflow: hidden;
`;

export const RadioInput = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);

`;

export const RadioLabel = styled.label`
  display: block;
  width: 100%;
  height: 100%;
  padding: 7px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  & > svg {
    fill: #525252;
    transition: fill 0.3s ease;
  }

  ${RadioInput}:checked + & {
    background-color: #2aa2ff;
  }

  ${RadioInput}:checked + & > svg {
    fill: white;
  }

`;

export const RadioContainer = styled.div`
  width: 31px;
  height: 31px;
`;
