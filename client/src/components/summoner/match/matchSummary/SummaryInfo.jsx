import React from "react";
import styled from "styled-components";
import { calculateRate, getKdaScoreColor } from "@utils/util";

import DoughnutGraph from "./DoughnutGraph";

const SummaryInfoWrap = styled.div`
  width: 276px;
  padding: 16px 0;
  border-right: 1px solid #cdd2d2;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

const WinLoseRatioWrap = styled.div`
  font-size: 12px;
  color: #666;
  text-align: center;
  margin-right: 30px;
`;

const GraphWrap = styled.div`
  position: relative;
  margin-top: 14px;
  width: 90px;
  height: 90px;

  .win-rate {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 14px;
    color: #555;

    span {
      font-weight: 600;
    }
  }
`;

const KdaWrap = styled.div`
  text-align: center;
`;

const KdaInfo = styled.div`
  font-size: 11px;
  font-weight: 600;
  color: #999;
  margin-bottom: 6px;
  height: 13px;

  .deaths {
    color: #c6443e;
  }
  b {
    color: #333;
    margin: 0 3px;
  }
`;

const KdaScore = styled.div`
  font-size: 16px;
  color: ${({ color }) => (color ? color : "#5e5e5e")};

  .kda {
    font-weight: 600;
  }
  .win-rate {
    color: #c6443e;
  }
  span {
    margin: 0 3px;
  }
`;

const SummaryInfo = ({ summary }) => {
  const { wins, losses, kills, deaths, assists } = summary;

  const games = wins + losses;
  const { winRate, kdaScore } = calculateRate({ ...summary, games });
  const kdaColor = getKdaScoreColor(+kdaScore);

  return (
    <SummaryInfoWrap>
      <WinLoseRatioWrap>
        {games}전 {wins}승 {losses}패
        <GraphWrap>
          <DoughnutGraph {...{ wins, losses }} />
          <div className="win-rate">
            <span>{winRate}%</span>
          </div>
        </GraphWrap>
      </WinLoseRatioWrap>
      <KdaWrap>
        <KdaInfo>
          <b>{kills}</b> / <b className="deaths">{deaths}</b> / <b>{assists}</b>
        </KdaInfo>
        <KdaScore color={kdaColor}>
          <span className="kda">{kdaScore}:1</span>
          <span className="win-rate">({winRate}%)</span>
        </KdaScore>
      </KdaWrap>
    </SummaryInfoWrap>
  );
};

export default SummaryInfo;
