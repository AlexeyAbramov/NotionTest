import styled from "styled-components";
import { ContainerStyle } from "../../assets/styles/CommonStyles";

export const TileListContainer = styled(ContainerStyle)`
  margin: 10px 0;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
`;
