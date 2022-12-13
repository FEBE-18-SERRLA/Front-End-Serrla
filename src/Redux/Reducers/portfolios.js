import { FETCH_START, GET_ALL_PORTFOLIOS } from "Redux/Actions/portfolios";

const initialState = {
  portfolios: [],
  isloading: false,
};

export default function portfoliosReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        isloading: true,
      };

    case GET_ALL_PORTFOLIOS:
      return {
        ...state,
        portfolios: action.portfolios,
        isloading: false,
      };

    default:
      return state;
  }
}
