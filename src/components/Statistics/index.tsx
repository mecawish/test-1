import {
  Bar,
  Container,
  Team,
  TeamBar,
  TeamPercentage,
  TeamStatsLabel,
} from "./styles";
import { StatisticsProps } from "./types";

const Statistics = ({ data }: StatisticsProps) => {
  const { statsLabel, homeKey, awayKey } = data;
  const homeStats = Number(data[homeKey]);
  const awayStats = Number(data[awayKey]);
  const total = homeStats + awayStats;
  const homeStatsPercentage = homeStats === 0 ? 0 : (homeStats / total) * 100;
  const awayStatsPercentage = awayStats === 0 ? 0 : (awayStats / total) * 100;
  const isHomeAbove = homeStats > awayStats;

  return (
    <Container>
      <Team>
        <TeamPercentage team="home" stats={homeStatsPercentage}>
          {homeStats}
        </TeamPercentage>
        <TeamBar team="home" stats={homeStatsPercentage}>
          <Bar
            team="home"
            stats={homeStatsPercentage}
            isHomeAbove={isHomeAbove}
          />
        </TeamBar>
      </Team>
      <Team>
        <TeamPercentage team="away" stats={awayStatsPercentage}>
          {awayStats}
        </TeamPercentage>
        <TeamBar team="away" stats={awayStatsPercentage}>
          <Bar
            team="away"
            stats={awayStatsPercentage}
            isHomeAbove={isHomeAbove}
          />
        </TeamBar>
      </Team>
      <TeamStatsLabel>{statsLabel}</TeamStatsLabel>
    </Container>
  );
};

export default Statistics;
