import { Props, ReturnedTypes } from "./types";

export const getGameData = (gameId: Props) => {
  const data: ReturnedTypes = require(`./${gameId}.json`);
  return data;
};
