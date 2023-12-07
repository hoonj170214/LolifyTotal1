import React from "react";
import styled from "styled-components";

import emptyChamp from "@assets/images/emptyChamp.png";

const EmptyChampionInfoWrap = styled.li`
  display: flex;
`;

const ChampImg = styled.img`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  margin-right: 8px;
`;

const InfoText = styled.p`
  line-height: 34px;
  font-size: 11px;
  color: #999;
`;

const EmptyChampionInfo = () => {
  return (
    <EmptyChampionInfoWrap>
      <ChampImg src={emptyChamp} alt="empty-champ-img" />
      <InfoText>챔피언 정보가 없습니다.</InfoText>
    </EmptyChampionInfoWrap>
  );
};

export default EmptyChampionInfo;
