const baseURL = "https://kr.api.riotgames.com";

export const API = {
  // GET_SUMMONER : return puuid
  GET_SUMMONER: (summonerName) => `${baseURL}/lol/summoner/v4/summoners/by-name/${summonerName}`,
  GET_MATCH_ID: (puuid) => `${baseURL}/lol/match/v5/matches/by-puuid/${puuid}/matches`,
  GET_MATCH_DETAIL: (matchId) => `https://asia.api.riotgames.com/lol/match/v5/matches/${matchId}`,
  //GET_MOST_INFO: (summonerName) => `${baseURL}/api/summoner/${summonerName}/mostInfo`,
};

export const CHAMPION_JSON = "http://ddragon.leagueoflegends.com/cdn/13.23.1/data/ko_KR/champion.json";
export const ITEM_JSON = "http://ddragon.leagueoflegends.com/cdn/13.23.1/data/ko_KR/item.json";
