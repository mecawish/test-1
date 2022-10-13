import styled, { css } from "styled-components";
import { TeamProps } from "./types";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  row-gap: 8px;
  margin-top: 4rem;
`;

export const Team = styled.div`
  flex: 1;
  display: flex;
  gap: 16px;
`;

export const TeamPercentage = styled.div<TeamProps>`
  color: #712a7a;
  font-weight: bold;
  font-family: helvetica;

  ${({ team }) =>
    team === "away" &&
    css`
      order: 1;
    `}}
`;

export const TeamBar = styled.div<TeamProps>`
  background: #cecece;
  flex: 1;
  display: flex;

  ${({ team }) => {
    switch (team) {
      case "home":
        return css`
          justify-content: flex-end;
        `;
      default:
        return css`
          justify-content: flex-start;
        `;
    }
  }}
`;

export const Bar = styled.div`
  ${({ team, stats, isHomeAbove }: TeamProps) => {
    switch (team) {
      case "home":
        return css`
          width: ${stats === 100 ? stats / 2 : stats}%;
          background-color: ${isHomeAbove ? "#5a2161" : "#a375a8"};
        `;
      default:
        return css`
          width: ${stats === 100 ? stats / 2 : stats}%;
          background-color: ${isHomeAbove ? "#a375a8" : "#5a2161"};
        `;
    }
  }}
`;

export const TeamStatsLabel = styled.div`
  color: #712a7a;
  font-weight: bold;
  font-family: helvetica;
  grid-template-columns: 1fr 1fr;
  grid-column: 1/3;
  text-align: center;
`;
