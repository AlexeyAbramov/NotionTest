import copy from "copy-to-clipboard";
import React, { useState } from "react";
import { SHOW_POPUP_TIME } from "../../assets/js/constants";
import { ClipButton, ClipImage, ClipWrapper, SuccessMessage } from "./ClipCopyStyle";

export interface ClipCopyProp {
  href?: string;
}

const ClipCopy: React.FC<ClipCopyProp> = ({ children, href }) => {
  const [successCopy, setSuccessCopy] = useState(false);

  const copyToClip = () => {
    if (typeof children === "string") {
      const status = copy(children);
      setSuccessCopy(status);
      setTimeout(() => {
        setSuccessCopy(false);
      }, SHOW_POPUP_TIME);
    }
  };

  return (
    <ClipWrapper>
      <ClipButton type="button" onClick={copyToClip}>
        <ClipImage />
        {successCopy && <SuccessMessage>Скопировано!</SuccessMessage>}
      </ClipButton>
      {href ? <a href={href}>{children}</a> : <p>{children}</p>}
    </ClipWrapper>
  );
};

export { ClipCopy };
