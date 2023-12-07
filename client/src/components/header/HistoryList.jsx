import React from "react";
import styled from "styled-components";
import { LOCAL_STORAGE_KEY } from "@constants/constant";
import { TiStar } from "react-icons/ti";
import { RiCloseLine } from "react-icons/ri";
import { RiInformationLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { getSummonerData } from "@modules/summoner";
import { deleteHistoryData, addFavoritesData, checkFavorites, deleteFavoritesData } from "@utils/util";

const NoHistory = styled.div`
  font-size: 13px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #666;
  text-align: center;
  padding: 15px 20px;
  .icon {
    font-size: 20px;
    margin-bottom: 10px;
    color: #bdc3c7;
  }
`;

const HistoryItemWrap = styled.li`
  width: 100%;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  :hover {
    background-color: #1ea1f710;
  }
`;

const NameText = styled.span`
  max-width: 160px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 13px;
  color: #666;
  line-height: 18px;
  cursor: pointer;
`;

const Icons = styled.span`
  line-height: 18px;
  vertical-align: middle;
  .star,
  .delete {
    cursor: pointer;
    font-size: 18px;
    color: #bdc3c7;
  }
  .star {
    margin-right: 8px;
    color: ${({ color }) => (color ? color : "#bdc3c7")};
  }
`;

const HistoryList = ({ setFocus }) => {
  const dispatch = useDispatch();
  const searchHistory = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY.SEARCH_HISTORY));

  if (!searchHistory)
    return (
      <NoHistory>
        <RiInformationLine className="icon" />
        <p>최근에 본 소환사가 없습니다.</p>
      </NoHistory>
    );

  const handleClickPlayerName = ({ target }) => {
    setFocus(false);
    window.scrollTo(0, 0);
    dispatch(getSummonerData(target.dataset.name));
  };

  const handleDelete = (summonerName) => {
    setFocus(false);
    deleteHistoryData(summonerName);
  };

  const handleAddFavorites = (summonerName) => {
    setFocus(false);
    if (checkFavorites(summonerName)) return deleteFavoritesData(summonerName);
    addFavoritesData(summonerName);
  };

  const historyList = searchHistory.map((data) => {
    const starColor = checkFavorites(data.name) ? "#3498db" : "#bdc3c7";
    return (
      <HistoryItemWrap key={data.name}>
        <NameText onClick={handleClickPlayerName} data-name={data.name}>
          {data.name}
        </NameText>
        <Icons color={starColor}>
          <TiStar className="star" onClick={() => handleAddFavorites(data.name)} />
          <RiCloseLine className="delete" onClick={() => handleDelete(data.name)} />
        </Icons>
      </HistoryItemWrap>
    );
  });

  return <ul>{historyList}</ul>;
};

export default HistoryList;
