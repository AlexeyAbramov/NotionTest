import styled from "styled-components";
import { UserNation } from "../Table/TableStyle";

export const TileContainer = styled.div`
  display: flex;
  padding: 1rem;
  box-shadow: 1px 1px 2px 1px rgb(0 0 0 / 20%);
`;

export const TileImageWrapper = styled.picture`
  height: 128px;
  width: 128px;
  margin-right: 1rem;
`;

export const TileImage = styled.img`
  display: block;
`;

export const TileInfoWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction:column;
  justify-content: space-between;
`;

export const UserNationTile = styled(UserNation)`
  position: absolute;
  font-size: 1rem;
  padding: 0.1rem 0.5rem;
  top: 0;
  right: 0;
  opacity: 0.8;
`;
