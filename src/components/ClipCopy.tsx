import copy from "copy-to-clipboard";
import React from "react";
import { ClipButton, ClipImage, ClipWrapper } from "../styled/ClipCopy";

export interface ClipCopyProp {
  href?: string;
}

const ClipCopy: React.FC<ClipCopyProp> = ({ children, href }) => {
  const copyToClip = () => {
    if (typeof children === "string") {
      copy(children);
    }
  };

  return (
    <ClipWrapper>
      <ClipButton type="button" onClick={copyToClip}>
        <ClipImage />
      </ClipButton>
      {href ? <a href={href}>{children}</a> : <p>{children}</p>}
    </ClipWrapper>
  );
};

export { ClipCopy };
