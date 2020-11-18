import React from "react";
import { RadioButton } from "../RadioButton/RadioButton";
import { ReactComponent as ListImg } from "../../assets/images/list.svg";
import { ReactComponent as BlocksImg } from "../../assets/images/blocks.svg";
import { RadioBlockWrapper } from "./RadioBlockStyle";

const buttons = [
  {
    id: "blocks-radio-btn",
    img: <BlocksImg />,
    value: "block",
    checked: false,
  },
  {
    id: "list-radio-btn",
    img: <ListImg />,
    value: "list",
    checked: true,
  },
];

const RadioBlock: React.FC = () => {
  return (
    <RadioBlockWrapper>
      {buttons.map(({ id, img, value, checked }) => (
        <RadioButton key={id} id={id} value={value} name="defname" checked={checked}>
          {img}
        </RadioButton>
      ))}
    </RadioBlockWrapper>
  );
};

export { RadioBlock };
