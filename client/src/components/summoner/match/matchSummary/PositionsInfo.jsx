import React from "react";
import styled from "styled-components";
import { calculateRate, translatePositionName } from "@utils/util";

import TOP from "@assets/images/topIcon.png";
import JNG from "@assets/images/jngIcon.png";
import MID from "@assets/images/midIcon.png";
import ADC from "@assets/images/adcIcon.png";
import SUP from "@assets/images/supIcon.png";

const PositionsInfoWrap = styled.div`
  padding: 16px;
  padding-right: 0;

  h3 {
    font-size: 12px;
    color: #666;
    margin-bottom: 10px;
  }
`;

const PositionInfoListWrap = styled.ul`
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const PositionsInfoItem = styled.li`
  display: flex;
  margin-left: -6px;
`;

const PositionIcon = styled.div`
  width: 44px;
  height: 44px;
  margin-right: 8px;
  background: url(${({ icon }) => icon}) no-repeat;
  background-position: center;
`;

const InfoText = styled.div`
  width: 100px;
  height: 44px;
  font-size: 11px;
  color: #666;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .position-name {
    height: 16px;
    font-size: 13px;
    color: #333;
    margin-bottom: 3px;
  }
`;

const RateInfoText = styled.div`
  span {
    display: inline-block;
    height: 13px;
  }
  .game-ratio {
    font-weight: 600;
    color: #1f8ecd;
  }
  .win-rate-wrap {
    .win-rate {
      font-weight: 600;
      color: #333;
    }
    ::before {
      display: inline-block;
      height: 13px;
      content: "";
      border-left: 1px solid #cdd2d2;
      margin: 0 6px;
      vertical-align: middle;
    }
  }
`;

const PositionsInfo = ({ positions }) => {
  const positionIcons = { TOP, JNG, MID, ADC, SUP };
  const positionsSort = positions.sort((a, b) => b.games - a.games);
  const totalGames = positions.reduce((acc, cur) => acc + cur.games, 0);

  const positionList = [];
  const positionsInfoList = positionsSort.map((data) => {
    const { games, position } = data;
    if (positionList.includes(position)) return null;
    positionList.push(position);

    const positionName = translatePositionName(position);
    const { winRate } = calculateRate(data);
    const gameRatio = Math.round((games / totalGames) * 100);

    return (
      <PositionsInfoItem key={position}>
        <PositionIcon icon={positionIcons[position]} />
        <InfoText>
          <div className="position-name">{positionName}</div>
          <RateInfoText>
            <span className="game-ratio">{gameRatio}%</span>
            <span className="win-rate-wrap">
              승률 <span className="win-rate">{winRate}%</span>
            </span>
          </RateInfoText>
        </InfoText>
      </PositionsInfoItem>
    );
  });

  return (
    <PositionsInfoWrap>
      <h3>선호 포지션 (랭크)</h3>
      <PositionInfoListWrap>{positionsInfoList}</PositionInfoListWrap>
    </PositionsInfoWrap>
  );
};

export default PositionsInfo;
