import React from "react";
import { useSelector } from "react-redux";
import { getContactStatistic } from "../../redux/contacts/selectors";
import { StatInfoBlock } from "../StatInfoBlock/StatInfoBlock";
import { StatNationBlock } from "../StatNationBlock/StatNationBlock";
import {
  StatisticWrapper,
  StatisticTitle,
  StatInfoList,
  StatGenderInfoWrapper,
  PredominateGender,
} from "./StatisticStyle";

const Statistic: React.FC = () => {
  // TODO: Сделать блок какой пол преобладает
  const { collectionsize, males, females, indeterminate, nationals } = useSelector(
    getContactStatistic,
  );

  return (
    <StatisticWrapper>
      <StatisticTitle>Statistic</StatisticTitle>
      <StatInfoList>
        <StatInfoBlock title="Collection size" value={`${collectionsize}`} />
        <StatGenderInfoWrapper>
          <StatInfoBlock title="Males" value={`${males}`} />
          <StatInfoBlock title="Females" value={`${females}`} />
          <PredominateGender>
            {males - females > 0 ? "Men predominate" : "Women predominate"}
          </PredominateGender>
        </StatGenderInfoWrapper>
        <StatInfoBlock title="Inderminate" value={`${indeterminate}`} />
      </StatInfoList>
      <StatNationBlock data={nationals} />
    </StatisticWrapper>
  );
};

export { Statistic };
