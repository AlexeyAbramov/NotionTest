import React from "react";
import { RadioBlock } from "../../componentsHelpers/RadioBlock/RadioBlock";
import { ReloadButton, SettingPanelWrapper } from "./SettingPanelStyle";
import { ReactComponent as RefreshImg } from "../../images/refresh.svg";

const SettingPanel: React.FC = () => {
  return (
    <SettingPanelWrapper>
      <ReloadButton type="button">
        <RefreshImg />
      </ReloadButton>
      <RadioBlock />
    </SettingPanelWrapper>
  );
};

export { SettingPanel };
