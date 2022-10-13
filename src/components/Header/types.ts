export type HeaderProps = {
  homeTeamId: string;
  awayTeamId: string;
  periodNumbers: number[];
  currentPeriod: number;
  setCurrentPeriod: (x: number) => void;
};
