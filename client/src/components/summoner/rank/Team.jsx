import React from "react";
import styled from "styled-components";
import { getTierName } from "@utils/util";

const TeamOutter = styled.div`
  width: 300px;
  height: 98px;
  border: 1px solid #cdd2d2;
  border-radius: 2px;
  background-color: #f2f2f2;
  box-sizing: border-box;
  display: flex;
  align-items: center;
`;

const TeamInner = styled.div`
  display: flex;
  align-items: center;
`;

const RankImg = styled.img`
  width: 64px;
  height: 64px;
  margin: 0 28px;
`;

const RankText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 11px;
  color: #879292;
  height: 68px;

  .rank-type {
    font-size: 11px;
  }
  .total-games {
    color: #353a3a;
  }
  .tier-info {
    font-size: 13px;
    font-weight: 600;
    color: #1f8ecd;
  }
  .lp-info {
    font-weight: 600;
    color: #555e5e;
  }
`;

const Team = ({ teamRankData }) => {
  const { wins, losses } = teamRankData;
  const { division, imageUrl, lp, tier } = teamRankData.tierRank;

  const totalGames = wins + losses;
  const tierInfo = getTierName(tier, division);
  const winRate = Math.round((wins / totalGames) * 100);

  return (
    <TeamOutter>
      <TeamInner>
        <RankImg src={imageUrl} alt="rank-img" />
        <RankText>
          <h4 className="rank-type">자유 5:5 랭크</h4>
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
      </TeamInner>
    </TeamOutter>
  );
};

export default Team;
