import { StatisticsTypes } from "pages/GameStatistics/types";

export type TeamType = "home" | "away";

export type TeamProps = {
  team: TeamType;
  stats: number;
  isHomeAbove?: boolean;
};

export type StatisticsProps = {
  data: StatisticsTypes;
};
