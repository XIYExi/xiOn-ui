import React from "react";
import Statistic, {BaseStatisticProps} from "./statistic";
import StatisticGroup, {BaseStatisticGroupProps} from "./statistic_group";
import StatisticLabel, {BaseStatisticLableProps} from "./statistic_label";
import StatisticValue, {BaseStatisticValueProps} from "./statistic_value";


export type IStatisticComponent = React.FC<BaseStatisticProps> & {
    Group: React.FC<BaseStatisticGroupProps>;
    Label: React.FC<BaseStatisticLableProps>;
    Value: React.FC<BaseStatisticValueProps>;
}

const IStatistic = Statistic as IStatisticComponent;
IStatistic.Group = StatisticGroup;
IStatistic.Label = StatisticLabel;
IStatistic.Value = StatisticValue;

export default IStatistic;
