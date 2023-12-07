import React from "react";
import styled from "styled-components";
import { LOCAL_STORAGE_KEY } from "@constants/constant";
import { TiStar } from "react-icons/ti";
import { RiCloseLine } from "react-icons/ri";
import { RiInformationLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { getSummonerData } from "@modules/summoner";
import { deleteFavoritesData } from "@utils/util";

const NoFavorites = styled.div`
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
  .star {
    font-size: 16px;
    color: #bdc3c7;
    vertical-align: middle;
  }
  p {
    width: 100%;
    line-height: 18px;
  }
`;

const FavoritesItemWrap = styled.li`
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
  .delete {
    cursor: pointer;
    font-size: 18px;
    color: #bdc3c7;
  }
`;

const FavoritesList = ({ setFocus }) => {
  const dispatch = useDispatch();
  const favorites = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY.FAVORITES));

  if (!favorites)
    return (
      <NoFavorites>
        <RiInformationLine className="icon" />
        <p>
          관심있는 소환사에 <TiStar className="star" />
          즐겨찾기를 하여 편리하게 정보를 받아보세요.
        </p>
      </NoFavorites>
    );

  const handleClickPlayerName = ({ target }) => {
    setFocus(false);
    window.scrollTo(0, 0);
    dispatch(getSummonerData(target.dataset.name));
  };

  const handleDelete = (summonerName) => {
    setFocus(false);
    deleteFavoritesData(summonerName);
  };

  const favoritesList = favorites.map((name) => {
    return (
      <FavoritesItemWrap key={name}>
        <NameText onClick={handleClickPlayerName} data-name={name}>
          {name}
        </NameText>
        <Icons>
          <RiCloseLine className="delete" onClick={() => handleDelete(name)} />
        </Icons>
      </FavoritesItemWrap>
    );
  });

  return <ul>{favoritesList}</ul>;
};

export default FavoritesList;
