import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../components/Header";
import Statistics from "../../components/Statistics";
import { getGameData } from "../../data";
import { GAME_LIST, STATISTICS_LIST } from "../../utils/constants";
import { Container } from "./styles";
import { StatisticsTypes } from "./types";

const GameStatistics = () => {
  const defaultGameId = GAME_LIST[0];
  const navigate = useNavigate();
  const { gameId } = useParams();
  const [gameStatistics, setGameStatistics] = useState<StatisticsTypes[]>();
  const [currentPeriod, setCurrentPeriod] = useState(0);
  const [periodNumbers, setPeriodNumbers] = useState<number[]>([]);

  const gameData = getGameData(gameId ?? defaultGameId); // I wanted to put this in state that will be set during useEffect but it causes additional re-render
  const { recaps } = gameData;
  const homeTeamId = recaps?.gameRecap?.homeTeamId;
  const awayTeamId = recaps?.gameRecap?.awayTeamId;

  useEffect(() => {
    if (!gameId) navigate(`/${defaultGameId}`);

    const recapsValues = Object.values(recaps);
    setPeriodNumbers(
      recapsValues.map(({ periodNumber }) => Number(periodNumber))
    );

    const periodStatistics = recapsValues.find(
      (e) => e.periodNumber === currentPeriod
    );

    const statisticsData = STATISTICS_LIST.map((stat) => ({
      [`home${stat.abbr}`]: periodStatistics?.[`home${stat.abbr}`],
      [`away${stat.abbr}`]: periodStatistics?.[`away${stat.abbr}`],
      statsLabel: stat.stats,
      homeKey: `home${stat.abbr}`,
      awayKey: `away${stat.abbr}`,
    }));

    setGameStatistics(statisticsData);
  }, [gameId, navigate, defaultGameId, recaps, currentPeriod]);

  return (
    <Container>
      <Header
        homeTeamId={homeTeamId}
        awayTeamId={awayTeamId}
        periodNumbers={periodNumbers.sort()}
        currentPeriod={currentPeriod}
        setCurrentPeriod={setCurrentPeriod}
      />
      {gameStatistics?.map((data) => (
        <Statistics key={data.statsLabel} data={data} />
      ))}
    </Container>
  );
};

export default GameStatistics;
