import React from "react";
import { OptionContainer, Select } from "./OptionSelectStyle";

const OptionSelect: React.FC = () => {
  return (
    <OptionContainer>
      <Select defaultValue="null" name="some">
        <option value="null">
          Gender
        </option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </Select>
    </OptionContainer>
  );
};

export { OptionSelect };
