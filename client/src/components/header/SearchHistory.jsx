import React from "react";
import styled from "styled-components";

import Tabs from "@components/common/Tabs";
import HistoryList from "./HistoryList";
import FavoritesList from "./FavoritesList";

const TabButtonWrap = styled.ul`
  display: flex;
`;

const TabButton = styled.li`
  width: 50%;
  padding: 15px;
  background-color: ${({ selected }) => (selected ? "#fff" : "#f2f2f2")};
  color: ${({ selected }) => (selected ? "#5e5e5e" : "#bdc3c7")};
  font-size: 14px;
  text-align: center;
  cursor: pointer;

  :last-child {
    border-right: none;
  }
`;

const SearchHistory = ({ setFocus }) => {
  return (
    <Tabs {...{ TabButtonWrap, TabButton }}>
      <HistoryList title="최근검색" {...{ setFocus }} />
      <FavoritesList title="즐겨찾기" {...{ setFocus }} />
    </Tabs>
  );
};

export default SearchHistory;
