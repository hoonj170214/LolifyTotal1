import React from "react";
import styled from "styled-components";
import { getNumberComma } from "@utils/util";

const InfoWrap = styled.div`
  position: relative;
  margin: 10px 17px;
`;

const Name = styled.h2`
  height: 24px;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.77px;
  color: #242929;
  margin-bottom: 4px;
`;

const LadderRank = styled.p`
  height: 13px;
  font-size: 11px;
  letter-spacing: -0.42px;
  color: #657070;

  span {
    font-weight: 600;
  }
`;

const ProfileInfo = ({ name, ladderRank }) => {
  const { rank, rankPercentOfTop } = ladderRank;
  const commaRank = getNumberComma(rank);

  return (
    <InfoWrap>
      <Name>{name}</Name>
      <LadderRank>
        레더 랭킹 <span>{commaRank}</span>위 (상위 {rankPercentOfTop}%)
      </LadderRank>
    </InfoWrap>
  );
};

export default ProfileInfo;
