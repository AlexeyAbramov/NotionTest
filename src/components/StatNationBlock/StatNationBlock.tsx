import React from "react";
import { NationCountBlock } from "../../componentsHelpers/NationCountBlock/NationCountBlock";
import { StatNationBlockWrapper, StatNationList, StatNationTitle } from "./StatNationBlockStyle";

const StatNationBlock: React.FC = () => {
  return (
    <StatNationBlockWrapper>
      <StatNationTitle>Nationalities</StatNationTitle>
      <StatNationList>
        <NationCountBlock nation="New Zealander" count="1" />
      </StatNationList>
    </StatNationBlockWrapper>
  );
};

export { StatNationBlock };
