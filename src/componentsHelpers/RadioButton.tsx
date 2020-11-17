import React from "react";
import { RadioInput, RadioContainer, RadioLabel } from "../styled/Radio";

export interface RadioButtonProps {
  id: string;
  value: string;
  name: string;
  checked: boolean;
}

const RadioButton: React.FC<RadioButtonProps> = ({ children, id, value, name, checked }) => {
  return (
    <RadioContainer>
      <RadioInput type="radio" name={name} id={id} value={value} defaultChecked={checked} />
      <RadioLabel htmlFor={id}>{children}</RadioLabel>
    </RadioContainer>
  );
};

export { RadioButton };
