import React, { memo } from "react";
import styled from "styled-components";
import { calculateRate, getKdaScoreColor, getWinRateColor } from "@utils/util";

const ChampWinRateItem = styled.li`
  padding: 4px 15px;
  border-bottom: 1px solid #cdd2d2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 11px;
  color: #879292;

  :last-child {
    border-bottom: none;
  }
`;

const ChampImg = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  margin-right: 10px;
`;

const InfoText = styled.div`
  width: ${({ width }) => `${width}px`};
  height: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: ${({ align }) => align};

  .top {
    color: ${({ color }) => (color ? color : "#5e5e5e")};
    font-size: 13px;
    font-weight: 600;
    cursor: default;
  }
  div {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

const ChampWinRate = ({ champions }) => {
  const championsSort = champions.sort((a, b) => b.games - a.games);

  const champList = [];
  const champWinRateList = championsSort.map((data) => {
    const { cs, games, id, name, imageUrl } = data;
    if (champList.includes(id)) return null;
    champList.push(id);

    const { csRate, killRate, assistRate, deathRate, kdaScore, winRate } = calculateRate(data);
    const kdaColor = getKdaScoreColor(+kdaScore);
    const winRateColor = getWinRateColor(+winRate);

    return (
      <ChampWinRateItem key={id}>
        <ChampImg src={imageUrl} alt="champ-img" />
        <InfoText width={68} align={"left"}>
          <div className="top" title={name}>
            {name}
          </div>
          <div>
            CS {cs} ({csRate})
          </div>
        </InfoText>
        <InfoText width={88} align={"center"} color={kdaColor}>
          <div className="top">{kdaScore}:1 평점</div>
          <div>
            {killRate} / {deathRate} / {assistRate}
          </div>
        </InfoText>
        <InfoText width={40} align={"center"} color={winRateColor}>
          <div className="top">{winRate}%</div>
          <div>{games}게임</div>
        </InfoText>
      </ChampWinRateItem>
    );
  });

  return <ul>{champWinRateList}</ul>;
};

export default memo(ChampWinRate);
