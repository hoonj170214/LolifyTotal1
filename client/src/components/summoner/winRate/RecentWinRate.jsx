import React, { memo } from "react";
import styled from "styled-components";
import { calculateRate } from "@utils/util";

const RecentWinRateItem = styled.li`
  padding: 8px 8px 8px 15px;
  border-bottom: 1px solid #cdd2d2;
  display: flex;
  align-items: center;
  font-size: 13px;
  font-weight: 600;
  color: #879292;

  .champ-name {
    width: 68px;
    color: #5e5e5e;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-right: 2px;
    cursor: default;
  }
  .win-rate {
    width: 34px;
    margin-right: 6px;
  }

  :last-child {
    border-bottom: none;
  }
`;

const ChampImg = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 10px;
`;

const RatioWrap = styled.div`
  position: relative;
  width: 123px;
  height: 24px;
  border-radius: 4px;
  background-color: #ee5a52;
  overflow: hidden;
`;

const WinRatio = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: ${({ winRate }) => `${winRate}%`};
  height: 100%;
  z-index: 1;
  background-color: #1f8ecd;
`;

const RatioText = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
  font-size: 12px;
  color: #fff;

  span {
    margin: 4px;
  }
`;

const RecentWinRate = ({ recentWinRate }) => {
  const recentWinRateSort = recentWinRate.sort((a, b) => {
    const bGames = b.wins + b.losses;
    const aGames = a.wins + a.losses;
    return bGames - aGames;
  });

  const champList = [];
  const recentWinRateList = recentWinRateSort.map((data) => {
    const { wins, losses, id, name, imageUrl } = data;
    if (champList.includes(id)) return null;
    champList.push(id);

    const games = wins + losses;
    const { winRate } = calculateRate({ ...data, games });

    return (
      <RecentWinRateItem key={id}>
        <ChampImg src={imageUrl} alt="champ-img" />
        <div className="champ-name" title={name}>
          {name}
        </div>
        <div className="win-rate">{winRate}%</div>
        <RatioWrap>
          <RatioText>
            <span>{wins}승</span>
            <span>{losses}패</span>
          </RatioText>
          <WinRatio winRate={winRate} />
        </RatioWrap>
      </RecentWinRateItem>
    );
  });

  return <ul>{recentWinRateList}</ul>;
};

export default memo(RecentWinRate);
