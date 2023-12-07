import { CHAMPION_JSON, ITEM_JSON } from "@constants/url";
import { get } from "@utils/request";

const GET_CHAMPIONS_DATA_SUCCESS = "gameDescription/GET_CHAMPIONS_DATA_SUCCESS";
const GET_ITEMS_DATA_SUCCESS = "gameDescription/GET_ITEMS_DATA_SUCCESS";
const GET_DATA_ERROR = "gameDescription/GET_DATA_ERROR";

export const getChampionsData = () => (dispatch) => {
  get(CHAMPION_JSON, dispatch, GET_CHAMPIONS_DATA_SUCCESS, GET_DATA_ERROR);
};

export const getItemsData = () => (dispatch) => {
  get(ITEM_JSON, dispatch, GET_ITEMS_DATA_SUCCESS, GET_DATA_ERROR);
};

const initialState = {
  championsData: null,
  itemsData: null,
  error: null,
};

const gameDescription = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHAMPIONS_DATA_SUCCESS:
      return {
        ...state,
        championsData: action.payload.data,
        error: null,
      };
    case GET_ITEMS_DATA_SUCCESS:
      return {
        ...state,
        itemsData: action.payload.data,
        error: null,
      };
    case GET_DATA_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};

export default gameDescription;
