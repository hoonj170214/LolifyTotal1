import { combineReducers } from "redux";
import summonerName from "./summoner";
import match from "./match";
import gameDescription from "./gameDescription";

const rootReducer = combineReducers({
  summonerName,
  match,
  gameDescription,
});

export default rootReducer;
