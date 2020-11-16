import styled, { keyframes } from "styled-components";
import { ReactComponent as CopyImg } from "../images/copy.svg";

const show = keyframes` 
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const ClipWrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const ClipImage = styled(CopyImg)`
  width: 1.5rem;
  height: 1.5rem;
  fill: #2aa2ff;
  transition: fill 0.3s ease;
`;

export const ClipButton = styled.button`
  position: relative;
  border: none;
  background-color: transparent;
  cursor: pointer;
  margin-right: 5px;
  margin-top: 2px;

  :focus {
    outline: none;
  }

  :hover ${ClipImage} {
    fill: #128ce9;
  }
`;

export const SuccessMessage = styled.p`
  position: absolute;
  animation: ${show} 0.5s ease;
  padding: 7px 12px;
  border-radius: 5px;
  border: 1px solid black;
  background-color: rgba(0,0,0, 0.7);
  color: white;
  font-size: 1.1rem;
`;
