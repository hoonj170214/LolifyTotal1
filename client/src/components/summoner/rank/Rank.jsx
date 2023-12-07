import React from "react";
import styled from "styled-components";

import Solo from "./Solo";
import Team from "./Team";

const RankWrap = styled.div`
  margin-bottom: 8px;
`;

const Rank = ({ summonerData }) => {
  const { leagues } = summonerData;
  const [soloRankData, teamRankData] = leagues;

  return (
    <RankWrap>
      <Solo {...{ soloRankData }} />
      <Team {...{ teamRankData }} />
    </RankWrap>
  );
};

export default Rank;
