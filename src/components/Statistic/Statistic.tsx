import React from "react";
import { useSelector } from "react-redux";
import { getContactStatistic } from "../../redux/contacts/selectors";
import { StatInfoBlock } from "../StatInfoBlock/StatInfoBlock";
import { StatNationBlock } from "../StatNationBlock/StatNationBlock";
import { StatisticWrapper, StatisticTitle, StatInfoList } from "./StatisticStyle";

const Statistic: React.FC = () => {
  // TODO: Типизировать функции в selectore и здесь
  const statData = useSelector(getContactStatistic);

  return (
    <StatisticWrapper>
      <StatisticTitle>Statistic</StatisticTitle>
      <StatInfoList>
        <StatInfoBlock title="Collection size" value={`${statData.collectionsize}`} />
        <StatInfoBlock title="Males" value={`${statData.males}`} />
        <StatInfoBlock title="Females" value={`${statData.females}`} />
        <StatInfoBlock title="Inderminate" value={`${statData.indeterminate}`} />
      </StatInfoList>
      <StatNationBlock data={statData.nationals} />
    </StatisticWrapper>
  );
};

export { Statistic };
