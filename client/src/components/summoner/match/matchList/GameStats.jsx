import React from "react";
import styled from "styled-components";
import moment from "moment";
import "moment/locale/ko";
import { getDuration } from "@utils/util";

const GameStatsWrap = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 11px;
  width: 70px;
  height: 70px;
  justify-content: space-between;
  align-items: center;
  color: #555;
  .game-type {
    font-weight: 600;
  }
  .center-border {
    display: inline-block;
    width: 27px;
    border-bottom: 1px solid;
  }
  &.win-game {
    .result-text {
      font-weight: 600;
      color: #2c709b;
    }
    .center-border {
      border-color: #a1b8cd;
    }
  }
  &.lose-game {
    .result-text {
      font-weight: 600;
      color: #d0021b;
    }
    .center-border {
      border-color: #c0aba8;
    }
  }
  &.re-game {
    .result-text {
      font-weight: 600;
      color: #000;
    }
    .center-border {
      border-color: #a7a7a7;
    }
  }
`;

const GameStats = ({ gameType, createDate, gameLength, resultClassName, resultText }) => {
  const timeAgo = moment(createDate * 1000).fromNow();
  const duration = getDuration(gameLength);

  return (
    <GameStatsWrap className={resultClassName}>
      <span className="game-type">{gameType}</span>
      <span>{timeAgo}</span>
      <span className="center-border" />
      <span className="result-text">{resultText}</span>
      <span>{duration}</span>
    </GameStatsWrap>
  );
};

export default GameStats;
