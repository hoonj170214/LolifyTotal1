import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { getMatchData } from "@modules/match";
import { FILTER_TYPE } from "@constants/constant";
import Tabs from "@components/common/Tabs";

import MatchFilter from "./MatchFilter";

const TabButtonWrap = styled.ul`
  width: 690px;
  height: 36px;
  display: flex;
  background-color: #f2f2f2;
  border: 1px solid #cdd2d2;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  box-sizing: border-box;
`;

const TabButton = styled.li`
  margin: 0 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-sizing: border-box;

  span {
    line-height: 32px;
    border-bottom: 2px solid ${({ selected }) => (selected ? "#1f8ecd" : "transparent")};
    color: ${({ selected }) => (selected ? "#1f8ecd" : "#555")};
    font-size: 12px;
    font-weight: ${({ selected }) => (selected ? "600" : "500")};
  }
`;

const Match = ({ summonerData }) => {
  const { ALL, SOLO_RANK, TEAM_RANK } = FILTER_TYPE;

  const dispatch = useDispatch();
  const [filterType, setFilterType] = useState(ALL);

  const tabClickCallback = (type) => setFilterType(type);

  useEffect(() => {
    dispatch(getMatchData(summonerData.name));
  }, [summonerData]);

  return (
    <Tabs {...{ TabButtonWrap, TabButton }}>
      <MatchFilter title="전체" callback={() => tabClickCallback(ALL)} {...{ filterType }} />
      <MatchFilter title="솔로랭크" callback={() => tabClickCallback(SOLO_RANK)} {...{ filterType }} />
      <MatchFilter title="자유랭크" callback={() => tabClickCallback(TEAM_RANK)} {...{ filterType }} />
    </Tabs>
  );
};

export default Match;
