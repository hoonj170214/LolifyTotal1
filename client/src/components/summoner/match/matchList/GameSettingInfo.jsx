import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { getChampName } from "@utils/util";

const GameSettingInfoWrap = styled.div`
  width: 100px;
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  .image-wrap {
    display: flex;
  }
  .champ-name {
    font-size: 11px;
    color: #555;
  }
`;

const ChampImg = styled.img`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  margin-right: 6px;
`;

const IconWrap = styled.div`
  display: flex;
  .spell,
  .peak {
    display: flex;
    flex-direction: column;
  }
`;

const SpellImg = styled.img`
  width: 22px;
  height: 22px;
  border-radius: 2px;
  margin-right: 4px;
  margin-bottom: 2px;
`;

const PeakImg = styled.img`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  margin-bottom: 2px;
  &.main-peak {
    background-color: #000;
  }
`;

const GameSettingInfo = ({ champion, spells, peak }) => {
  const { championsData } = useSelector(({ gameDescription }) => gameDescription);

  const champName = getChampName(champion.imageUrl, championsData);

  return (
    <GameSettingInfoWrap>
      <div className="image-wrap">
        <ChampImg src={champion.imageUrl} alt="champ-img" />
        <IconWrap>
          <div className="spell">
            <SpellImg src={spells[0].imageUrl} alt="spell-img" />
            <SpellImg src={spells[1].imageUrl} alt="spell-img" />
          </div>
          <div className="peak">
            <PeakImg src={peak[0]} alt="peak-img" className="main-peak" />
            <PeakImg src={peak[1]} alt="peak-img" />
          </div>
        </IconWrap>
      </div>
      <span className="champ-name">{champName}</span>
    </GameSettingInfoWrap>
  );
};

export default GameSettingInfo;
