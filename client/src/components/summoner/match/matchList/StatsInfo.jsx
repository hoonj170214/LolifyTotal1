import React from "react";
import styled from "styled-components";

const StatsInfoWrap = styled.div`
  width: 90px;
  height: 60px;
  font-size: 11px;
  color: #555e5e;
  text-align: center;
  .kill-rate {
    font-weight: 600;
    color: #d0021b;
  }
  div {
    height: 13px;
    margin-bottom: 6px;
  }
`;

const StatsInfo = ({ champion, stats }) => {
  const { level } = champion;
  const { cs, csPerMin, contributionForKillRate } = stats.general;

  return (
    <StatsInfoWrap>
      <div>레벨{level}</div>
      <div>
        {cs} ({csPerMin}) CS
      </div>
      <div className="kill-rate">킬관여 {contributionForKillRate}</div>
    </StatsInfoWrap>
  );
};

export default StatsInfo;
