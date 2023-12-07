import { GAME_RESULT, LOCAL_STORAGE_KEY } from '@constants/constant';

export const checkResponseData = response => response.ok && (response.status >= 200 && response.status <= 207);

export const getNumberComma = (number) => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export const getTierName = (tier, division) => {
    if (tier === 'Challenger' || tier === 'Grandmaster' || tier === 'Master') return tier;
    const divisions = {
        'i': 1,
        'ii': 2,
        'iii': 3,
        'iv': 4
    }
    return `${tier} ${divisions[division]}`;
};

export const calculateRate = (data) => {
    const { cs, kills, assists, deaths, wins, games } = data;
    const csRate = (cs / games).toFixed(1);
    const killRate = (kills / games).toFixed(1);
    const assistRate = (assists / games).toFixed(1);
    const deathRate = (deaths / games).toFixed(1);
    const kdaScore = ((kills + assists) / deaths).toFixed(2);
    const winRate = Math.round((wins / games) * 100);
    return { csRate, killRate, assistRate, deathRate, kdaScore, winRate };
};

export const getKdaScoreColor = (kda) => {
    if (kda >= 5) return '#e19205';
    if (kda >= 4) return '#1f8ecd';
    if (kda >= 3) return '#2daf7f';
    return null;
};

export const getWinRateColor = (winRate) => {
    if (winRate >= 60) return '#c6443e';
    return null;
};

export const translatePositionName = (position) => {
    switch (position) {
        case 'TOP': return '탑';
        case 'JNG': return '정글';
        case 'MID': return '미드';
        case 'ADC': return '원딜';
        case 'SUP': return '서폿';
        default: break;
    }
};

export const getGameResult = (gameLength, isWin) => {
    const { RE_GAME, WIN_GAME, LOSE_GAME } = GAME_RESULT;
    const resultClassName = gameLength <= 300 ? RE_GAME : isWin ? WIN_GAME : LOSE_GAME;

    switch (resultClassName) {
        case WIN_GAME: return { resultClassName, resultText: '승리' };
        case LOSE_GAME: return { resultClassName, resultText: '패배' };
        case RE_GAME: return { resultClassName, resultText: '다시하기' };
        default: break;
    }
};

export const getDuration = (duration) => {
    const minute = Math.floor(duration / 60);
    const seconds = duration - (minute * 60);
    return `${minute}분 ${seconds}초`
}

export const getChampName = (imageUrl, data) => {
    const needlessLength = 54;
    const champName = imageUrl.substr(needlessLength).replace('.png', '');
    return data[champName].name;
};

export const getItemDescription = (imageUrl, data) => {
    const needlessLength = 50;
    const itemCode = imageUrl.substr(needlessLength).replace('.png', '');
    return { name: data[itemCode].name, description: data[itemCode].description };
};

export const getLargestKill = (largestMultiKillString) => {
    switch (largestMultiKillString) {
        case 'Penta Kill': return '펜타킬';
        case 'Quadra Kill': return '쿼드라킬';
        case 'Triple Kill': return '트리플킬';
        case 'Double Kill': return '더블킬';
        default: return null;
    }
}

export const deleteHistoryData = (summonerName) => {
    const data = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY.SEARCH_HISTORY));
    let _data = data.filter(data => data.name !== summonerName);
    if (!_data.length) _data = null;
    localStorage.setItem(LOCAL_STORAGE_KEY.SEARCH_HISTORY, JSON.stringify(_data));
}

export const checkFavorites = (summonerName) => {
    const favorites = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY.FAVORITES));
    if (!favorites) return false;

    return favorites.some(name => name === summonerName);
}

export const addFavoritesData = (summonerName) => {
    let favorites = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY.FAVORITES));
    if (!favorites) favorites = [];

    const favoritesMaxSize = 10;
    favorites.unshift(summonerName);
    if (favorites.length > favoritesMaxSize) favorites.splice(favoritesMaxSize);
    localStorage.setItem(LOCAL_STORAGE_KEY.FAVORITES, JSON.stringify(favorites));
}

export const deleteFavoritesData = (summonerName) => {
    const data = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY.FAVORITES));
    let _data = data.filter(name => name !== summonerName);
    if (!_data.length) _data = null;
    localStorage.setItem(LOCAL_STORAGE_KEY.FAVORITES, JSON.stringify(_data));
}