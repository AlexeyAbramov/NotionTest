import React from "react";
import { OptionContainer, Select } from "./OptionSelectStyle";

export interface OptionSelectProps {
  // TODO: Продолжение типизирования инпута
  onChange: (evt) => void,
  name: string,
}

const OptionSelect: React.FC<OptionSelectProps> = ({ onChange, name }) => {
  return (
    <OptionContainer>
      <Select onChange={onChange} defaultValue="" name={name}>
        <option value="">Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </Select>
    </OptionContainer>
  );
};

export { OptionSelect };
