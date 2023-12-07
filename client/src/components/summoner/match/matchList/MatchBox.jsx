import React, { memo } from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import { getGameResult } from "@utils/util";

import GameStats from "./GameStats";
import GameSettingInfo from "./GameSettingInfo";
import KDAInfo from "./KDAInfo";
import StatsInfo from "./StatsInfo";
import ItemsInfo from "./ItemsInfo";
import PlayerNames from "./PlayerNames";
import MoreInfoButton from "./MoreInfoButton";

const MatchBoxWrap = styled.li`
  position: relative;
  width: 690px;
  height: 96px;
  box-sizing: border-box;
  border: 1px solid;
  border-radius: 2px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  &.win-game {
    background-color: #b0ceea;
    border-color: #a1b8cd;
  }
  &.lose-game {
    background-color: #d6b5b2;
    border-color: #c0aba8;
  }
  &.re-game {
    background-color: #b6b6b6;
    border-color: #a7a7a7;
  }
`;

const MatchBox = ({ match }) => {
  const { champion, spells, items, gameId, createDate, gameLength, gameType, stats, peak, isWin } = match;
  const { resultClassName, resultText } = getGameResult(gameLength, isWin);
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <MatchBoxWrap className={resultClassName} ref={ref}>
      <GameStats {...{ gameType, createDate, gameLength, resultClassName, resultText }} />
      <GameSettingInfo {...{ champion, spells, peak }} />
      <KDAInfo {...{ stats }} />
      <StatsInfo {...{ champion, stats }} />
      <ItemsInfo ward={stats.ward} {...{ items, resultClassName }} />
      {inView && <PlayerNames {...{ gameId }} />}
      <MoreInfoButton {...{ resultClassName }} />
    </MatchBoxWrap>
  );
};

const checkMatchBoxProps = (prevProps, nextProps) => prevProps.match.gameId === nextProps.match.gameId;

export default memo(MatchBox, checkMatchBoxProps);
