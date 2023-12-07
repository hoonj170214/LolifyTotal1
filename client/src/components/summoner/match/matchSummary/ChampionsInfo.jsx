import React from "react";
import styled from "styled-components";
import { calculateRate, getKdaScoreColor, getWinRateColor } from "@utils/util";

import EmptyChampionInfo from "./EmptyChampionInfo";

const ChampionsInfoWrap = styled.ul`
  width: 228px;
  padding: 16px;
  padding-right: 0;
  border-right: 1px solid #cdd2d2;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ChampionsInfoItem = styled.li`
  display: flex;
`;

const ChampImg = styled.img`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  margin-right: 8px;
`;

const InfoText = styled.div`
  font-size: 11px;
  color: #555;

  .champ-name {
    height: 16px;
    font-size: 14px;
    color: #333;
    margin-bottom: 3px;
  }
  .win-rate {
    font-weight: 600;
    color: ${({ color }) => (color ? color : "#333")};
    margin-right: 2px;
  }
  span {
    display: inline-block;
    height: 13px;
  }
`;

const KdaScore = styled.span`
  font-weight: 600;
  color: ${({ color }) => (color ? color : "#555")};

  ::before {
    display: inline-block;
    height: 13px;
    content: "";
    border-left: 1px solid #cdd2d2;
    margin: 0 6px;
    vertical-align: middle;
  }
`;

const ChampionsInfo = ({ champions }) => {
  let needChampionsListLength = 3;

  const champList = [];
  const championsList = champions.map((data) => {
    const { wins, losses, id, name, imageUrl } = data;
    if (champList.includes(id)) return null;
    champList.push(id);

    const { kdaScore, winRate } = calculateRate(data);
    const kdaColor = getKdaScoreColor(+kdaScore);
    const winRateColor = getWinRateColor(+winRate);
    needChampionsListLength--;

    return (
      <ChampionsInfoItem key={id}>
        <ChampImg src={imageUrl} alt="champ-img" />
        <InfoText color={winRateColor}>
          <div className="champ-name">{name}</div>
          <span className="win-rate">{winRate}%</span>
          <span>
            ({wins}승 {losses}패)
          </span>
          <KdaScore color={kdaColor}>{kdaScore}:1 평점</KdaScore>
        </InfoText>
      </ChampionsInfoItem>
    );
  });

  for (let i = 0; i < needChampionsListLength; i++) {
    championsList.push(<EmptyChampionInfo key={i} />);
  }

  return <ChampionsInfoWrap>{championsList}</ChampionsInfoWrap>;
};

export default ChampionsInfo;
