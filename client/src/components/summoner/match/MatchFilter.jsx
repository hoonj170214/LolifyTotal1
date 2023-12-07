import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Loading from "@components/common/Loading";

import MatchSummary from "./matchSummary/MatchSummary";
import MatchList from "./matchList/MatchList";

const LoadingWrap = styled.div`
  width: 690px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MatchFilter = ({ filterType }) => {
  const { matchData, error } = useSelector(({ match }) => match);

  if (!matchData || error)
    return (
      <LoadingWrap>
        <Loading size={100} />
      </LoadingWrap>
    );

  const { summary, champions, positions, games } = matchData;

  return (
    <>
      <MatchSummary {...{ summary, champions, positions }} />
      <MatchList {...{ games, filterType }} />
    </>
  );
};

export default MatchFilter;
