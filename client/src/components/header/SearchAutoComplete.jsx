import React from "react";
import styled from "styled-components";
import { LOCAL_STORAGE_KEY } from "@constants/constant";
import { useDispatch } from "react-redux";
import { getSummonerData } from "@modules/summoner";

const AutoCompleteItemWrap = styled.li`
  width: 100%;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  font-size: 14px;
  line-height: 17px;
  cursor: pointer;
  .info-text {
    display: flex;
    flex-direction: column;
  }
  .summoner-name {
    width: 160px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 3px;
  }
  :hover {
    background-color: #1ea1f710;
  }
`;

const ProfileImg = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-right: 15px;
`;

const StartStr = styled.span`
  color: #d53f3f;
`;

const EndStr = styled.span`
  color: #333;
`;

const TierInfo = styled.p`
  line-height: 14px;
  font-size: 12px;
  color: #666;
`;

const SearchAutoComplete = ({ value, setFocus, setValue }) => {
  const dispatch = useDispatch();
  const data = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY.SEARCH_HISTORY));
  if (!data) return null;

  const handleClickPlayerName = (name) => {
    setFocus(false);
    setValue("");
    window.scrollTo(0, 0);
    dispatch(getSummonerData(name));
  };

  const autoCompleteList = data
    .filter((data) => data.name.startsWith(value))
    .map((data) => {
      const endStr = data.name.slice(value.length);

      return (
        <AutoCompleteItemWrap key={data.name} onClick={() => handleClickPlayerName(data.name)}>
          <ProfileImg src={data.profileImageUrl} alt="profile-img" />
          <div className="info-text">
            <div className="summoner-name">
              <StartStr>{value}</StartStr>
              <EndStr>{endStr}</EndStr>
            </div>
            <TierInfo>
              {data.tierInfo} - {data.lp}
            </TierInfo>
          </div>
        </AutoCompleteItemWrap>
      );
    });

  return <ul>{autoCompleteList}</ul>;
};

export default SearchAutoComplete;
