import React, { useState } from "react";
import styled from "styled-components";
import useFetch from "@hooks/useFetch";
import { API } from "@constants/url";
import Tabs from "@components/common/Tabs";

import ChampWinRate from "./ChampWinRate";
import RecentWinRate from "./RecentWinRate";

const WinRateWrap = styled.div`
  background-color: #ededed;
  border: 1px solid #cdd2d2;
`;

const TabButtonWrap = styled.ul`
  display: flex;
`;

const TabButton = styled.li`
  width: 150px;
  padding: 15px;
  background-color: ${({ selected }) => (selected ? "#ededed" : "#f2f2f2")};
  border-bottom: 1px solid ${({ selected }) => (selected ? "#ededed" : "#cdd2d2")};
  border-right: 1px solid #cdd2d2;
  color: ${({ selected }) => (selected ? "#5e5e5e" : "#879292")};
  font-size: 12px;
  font-weight: ${({ selected }) => (selected ? "600" : "500")};
  text-align: center;
  cursor: pointer;

  :last-child {
    border-right: none;
  }
`;

const WinRate = ({ summonerData }) => {
  const [mostInfo, setMostInfo] = useState(null);

  const url = API.GET_MOST_INFO(summonerData.name);
  const bLoading = useFetch({ url, callback: setMostInfo, dependency: summonerData });
  if (bLoading) return null;

  const { champions, recentWinRate } = mostInfo;

  return (
    <WinRateWrap>
      <Tabs {...{ TabButtonWrap, TabButton }}>
        <ChampWinRate title="챔피언 승률" {...{ champions }} />
        <RecentWinRate title="7일간 랭크 승률" {...{ recentWinRate }} />
      </Tabs>
    </WinRateWrap>
  );
};

export default WinRate;
