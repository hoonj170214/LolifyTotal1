import React from "react";
import { FILTER_TYPE } from "@constants/constant";

import MatchBox from "./MatchBox";

const MatchList = ({ games, filterType }) => {
  let matchFilterList;

  if (FILTER_TYPE.ALL === filterType) matchFilterList = games;
  else matchFilterList = games.filter((game) => game.gameType === filterType);

  const matchList = matchFilterList.map((match) => <MatchBox key={match.gameId} {...{ match }} />);

  return <ul>{matchList}</ul>;
};

export default MatchList;
