import React from "react";
import styled from "styled-components";
import { getTierName } from "@utils/util";

const SoloOutter = styled.div`
  width: 300px;
  height: 124px;
  border: 1px solid #cdd2d2;
  border-radius: 2px;
  background-color: #f2f2f2;
  box-sizing: border-box;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
`;

const SoloInner = styled.div`
  display: flex;
  align-items: center;
`;

const RankImg = styled.img`
  width: 104px;
  height: 104px;
  margin: 0 8px;
`;

const RankText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 12px;
  color: #879292;
  height: 100px;

  .rank-type {
    font-size: 11px;
  }
  .total-games {
    color: #353a3a;
  }
  .tier-info {
    font-size: 15px;
    font-weight: 600;
    color: #1f8ecd;
  }
  .lp-info {
    font-weight: 600;
    color: #555e5e;
  }
`;

const Solo = ({ soloRankData }) => {
  const { wins, losses } = soloRankData;
  const { division, imageUrl, lp, tier } = soloRankData.tierRank;

  const totalGames = wins + losses;
  const tierInfo = getTierName(tier, division);
  const winRate = Math.round((wins / totalGames) * 100);

  return (
    <SoloOutter>
      <SoloInner>
        <RankImg src={imageUrl} alt="rank-img" />
        <RankText>
          <h4 className="rank-type">솔로 랭크</h4>
          <div className="total-games">총 {totalGames}게임</div>
          <div className="tier-info">{tierInfo}</div>
          <div>
            <span className="lp-info">{lp} LP</span>
            <span className="wins-losses">
              {" "}
              / {wins}승 {losses}패
            </span>
          </div>
          <div className="win-rate">승률 {winRate}%</div>
        </RankText>
      </SoloInner>
    </SoloOutter>
  );
};

export default Solo;
