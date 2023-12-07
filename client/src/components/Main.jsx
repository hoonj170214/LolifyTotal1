import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getChampionsData, getItemsData } from "@modules/gameDescription";

import NoResult from "@components/etc/NoResult";
import Header from "@components/header/Header";
import Profile from "@components/summoner/profile/Profile";
import Rank from "@components/summoner/rank/Rank";
import WinRate from "@components/summoner/winRate/WinRate";
import Match from "@components/summoner/match/Match";

const MainWrap = styled.div`
  width: 1440px;
  margin: 0 auto;
`;

const ContentsOutter = styled.div`
  background-color: #eaeaea;
`;

const ContentsInner = styled.div`
  padding: 10px 0 40px 179px;
  display: flex;
`;

const LeftContents = styled.div`
  width: 300px;
  margin-right: 10px;
`;

const RightContents = styled.div`
  width: 690px;
`;

const Main = () => {
  const dispatch = useDispatch();
  const { summonerData, error } = useSelector(({ summoner }) => summoner);
  const { championsData, itemsData } = useSelector(({ gameDescription }) => gameDescription);

  useEffect(() => {
    if (!championsData) dispatch(getChampionsData());
    if (!itemsData) dispatch(getItemsData());
  }, [dispatch]);

  const mainContents =
    summonerData && !error ? (
      <>
        <Profile {...{ summonerData }} />
        <ContentsOutter>
          <ContentsInner>
            <LeftContents>
              <Rank {...{ summonerData }} />
              <WinRate {...{ summonerData }} />
            </LeftContents>
            <RightContents>
              <Match {...{ summonerData }} />
            </RightContents>
          </ContentsInner>
        </ContentsOutter>
      </>
    ) : (
      <NoResult />
    );

  return (
    <MainWrap>
      <Header />
      {mainContents}
    </MainWrap>
  );
};

export default Main;
