import React from "react";
import { StatInfoBlock } from "../StatInfoBlock/StatInfoBlock";
import { StatNationBlock } from "../StatNationBlock/StatNationBlock";
import { StatisticWrapper, StatisticTitle, StatInfoList } from "./StatisticStyle";

const Statistic: React.FC = () => {
  return (
    <StatisticWrapper>
      <StatisticTitle>Statistic</StatisticTitle>
      <StatInfoList>
        <StatInfoBlock title="Collection size" value="12" />
        <StatInfoBlock title="Males" value="8" />
        <StatInfoBlock title="Females" value="4" />
        <StatInfoBlock title="Inderminate" value="0" />
      </StatInfoList>
      <StatNationBlock />
    </StatisticWrapper>
  );
};

export { Statistic };
