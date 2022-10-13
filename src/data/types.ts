export type Props = string | number;

export type GameRecapValues = {
  homeTeamId: string;
  awayTeamId: string;
  [index: string]: string | number;
};

export type GameRecap = {
  gameRecap: GameRecapValues;
};

export type ReturnedTypes = {
  playersByTeam: object;
  recaps: GameRecap;
  gameState: object;
};
