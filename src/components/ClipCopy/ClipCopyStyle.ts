import styled from "styled-components";
import { ReactComponent as CopyImg } from "../../assets/images/copy.svg";
import { opacityInAnim } from "../../assets/styles/CommonAnimation";

export const ClipWrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const ClipImage = styled(CopyImg)`
  width: 1.5rem;
  height: 1.5rem;
  fill: ${({ theme }) => theme.colors.links};
  opacity: 0.7;
  transition: opacity 0.3s ease;
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
    opacity: 1;
  }

  :focus ${ClipImage} {
    box-shadow: 0 0 5px 2px ${({ theme }) => theme.colors.links};
  }
`;

export const SuccessMessage = styled.p`
  position: absolute;
  animation: ${opacityInAnim} 0.5s ease;
  padding: 7px 12px;
  border-radius: 5px;
  border: 1px solid black;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  font-size: 1.1rem;
`;
