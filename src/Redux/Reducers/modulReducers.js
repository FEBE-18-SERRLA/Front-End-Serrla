import {
  FETCH_START,
  GET_MODUL_SUCCESS,
  SEARCH_MODUL,
  FILTER_MODUL,
  GET_DETAIL_MODUL,
} from "../Actions/modulActions";

const initialState = {
  modul: [],
  isLoading: false,
};

const modulReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        isLoading: true,
      };
    case GET_MODUL_SUCCESS:
      return {
        ...state,
        modul: action.modul,
        isLoading: false,
      };
    case GET_DETAIL_MODUL:
      return {
        ...state,
        modul: action.detailModul,
        isLoading: false,
      };
    case SEARCH_MODUL:
      return {
        ...state,
        modul: action.search,
      };
    case FILTER_MODUL:
      return {
        ...state,
        modul: action.filter,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default modulReducer;
