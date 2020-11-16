import styled from "styled-components";
import { ReactComponent as CopyImg } from "../images/copy.svg";

export const ClipWrapper = styled.div`
  display: flex;
  align-items: flex-start
`;

export const ClipButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  margin-right: 5px;
  margin-top: 2px;

  :focus {
    outline: none;
  }

`;

export const ClipImage = styled(CopyImg)`
  width: 1.5rem;
  height: 1.5rem;
  fill: #2aa2ff;
`;
