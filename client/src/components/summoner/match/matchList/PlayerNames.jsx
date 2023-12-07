import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useFetch from "@hooks/useFetch";
import styled from "styled-components";
import { API } from "@constants/url";
import Loading from "@components/common/Loading";
import { getSummonerData } from "@modules/summoner";

const PlayerNamesWrap = styled.div`
  width: 170px;
  height: 92px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TeamWrap = styled.div`
  width: 85px;
  height: 92px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const PlayerInfoWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2px;
  img {
    width: 16px;
    height: 16px;
    margin-right: 3px;
  }
  p {
    max-width: 60px;
    height: 13px;
    font-size: 11px;
    color: #555;
    letter-spacing: -0.42px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    cursor: pointer;
  }
  :last-child {
    margin: 0;
  }
`;

const PlayerNames = ({ MatchId }) => {
  const dispatch = useDispatch();
  const { summonerData } = useSelector(({ summoner }) => summoner);
  const [gamePlayersInfo, setGamePlayersInfo] = useState(null);

  const url = API.GET_MATCH_DETAIL(MatchId);
  const bLoading = useFetch({ url, callback: setGamePlayersInfo, dependency: summonerData });
  if (bLoading)
    return (
      <PlayerNamesWrap>
        <Loading size={40} />
      </PlayerNamesWrap>
    );

  const handleClickPlayerName = ({ target }) => {
    window.scrollTo(0, 0);
    dispatch(getSummonerData(target.dataset.name));
  };
  const makeTeamList = (player) => {
    return (
      <PlayerInfoWrap key={player.summonerId}>
        <img src={player.champion.imageUrl} alt="champion-img" />
        <p data-name={player.summonerName} onClick={handleClickPlayerName}>
          {player.summonerName}
        </p>
      </PlayerInfoWrap>
    );
  };

  const [teamA, teamB] = gamePlayersInfo.teams;
  const teamAList = teamA.players.map(makeTeamList);
  const teamBList = teamB.players.map(makeTeamList);

  return (
    <PlayerNamesWrap>
      <TeamWrap>{teamAList}</TeamWrap>
      <TeamWrap>{teamBList}</TeamWrap>
    </PlayerNamesWrap>
  );
};

export default PlayerNames;
