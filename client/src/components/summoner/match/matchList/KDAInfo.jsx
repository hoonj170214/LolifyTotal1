import React from "react";
import styled from "styled-components";
import { getLargestKill } from "@utils/util";

const KDAInfoWrap = styled.div`
  width: 114px;
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .badge {
    margin-top: 7px;
  }
`;

const KDAWrap = styled.div`
  height: 18px;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: -0.58px;
  color: #948e8d;
  margin-bottom: 6px;
  b {
    color: #555e5e;
  }
  .death {
    color: #d0021b;
  }
`;

const KDAScoreWrap = styled.div`
  height: 13px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: -0.42px;
  color: #555e5e;
  b {
    color: #333;
  }
`;

const Badge = styled.span`
  display: inline-block;
  font-size: 10px;
  font-weight: 300;
  padding: 3px 5px;
  color: #f2f2f2;
  letter-spacing: -0.38px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border: 1px solid ${({ borderColor }) => borderColor};
  border-radius: 9px;
  margin-right: 4px;
  :last-child {
    margin-right: 0;
  }
`;

const KDAInfo = ({ stats }) => {
  const { kill, death, assist, kdaString, largestMultiKillString, opScoreBadge } = stats.general;
  const largestKill = getLargestKill(largestMultiKillString);
  const badgeClassName = (largestKill || opScoreBadge) && "badge";

  return (
    <KDAInfoWrap>
      <KDAWrap>
        <b>{kill}</b> / <b className="death">{death}</b> / <b>{assist}</b>
      </KDAWrap>
      <KDAScoreWrap>
        <b>{kdaString}</b> 평점
      </KDAScoreWrap>
      <div className={badgeClassName}>
        {largestKill && (
          <Badge backgroundColor="#ec4f48" borderColor="#bf3b36">
            {largestKill}
          </Badge>
        )}
        {opScoreBadge && (
          <Badge backgroundColor="#8c51c5" borderColor="#7f3590">
            {opScoreBadge}
          </Badge>
        )}
      </div>
    </KDAInfoWrap>
  );
};

export default KDAInfo;
