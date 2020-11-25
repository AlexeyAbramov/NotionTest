import React from "react";
import { GetFormateDataReturn } from "../../assets/js/data-convertor";
import { TileTextGroup } from "../../componentsHelpers/TileTextGroup/TileTextGroup";
import { ClipCopy } from "../ClipCopy/ClipCopy";
import { TileContainer } from "./TileStyle";

export interface TileProps extends GetFormateDataReturn {
  picture: string;
}

const Tile: React.FC<TileProps> = ({
  birthday,
  email,
  fullName,
  location,
  national,
  nationalColor,
  phone,
  picture,
}) => {
  return (
    <TileContainer>
      <img src={picture} alt="none" />
      <TileTextGroup title="Full name">{fullName}</TileTextGroup>
      <TileTextGroup title="Birthday">{birthday}</TileTextGroup>
      <TileTextGroup title="Email">
        <ClipCopy href={`mailto:${email}`}>{email}</ClipCopy>
      </TileTextGroup>
      <TileTextGroup title="Phone">
        <ClipCopy href={`tel:${phone}`}>{phone}</ClipCopy>
      </TileTextGroup>
      <TileTextGroup title="Location">
        <ClipCopy>
          {location}
        </ClipCopy>
      </TileTextGroup>
    </TileContainer>
  );
};

export { Tile };
