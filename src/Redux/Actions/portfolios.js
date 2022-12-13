import axios from "axios";

export const FETCH_START = "FETCH_START";
export const GET_ALL_PORTFOLIOS = "GET_ALL_PORTFOLIOS";
export const GET_PORTFOLIO = "GET_PORTFOLIO";
export const ADD_PORTFOLIO = "ADD_PORTFOLIO";
export const UPDATE_PORTFOLIO = "UPDATE_PORTFOLIO";
export const DELETE_PORTFOLIO = "DELETE_PORTFOLIO";

export const fetchStart = () => {
  return {
    type: FETCH_START,
  };
};

export const getAllPortfoliosSuccess = (portfolios) => {
  return {
    type: GET_ALL_PORTFOLIOS,
    portfolios,
  };
};

export const getPortfolioSuccess = (portfolio) => {
  return {
    type: GET_PORTFOLIO,
    portfolio,
  };
};

export const addPortfolioSuccess = (portfolio) => {
  return {
    type: ADD_PORTFOLIO,
    portfolio,
  };
};

export const updatePortfolioSuccess = (portfolio) => {
  return {
    type: UPDATE_PORTFOLIO,
    portfolio,
  };
};

export const deletePortfolioSuccess = (portfolio) => {
  return {
    type: DELETE_PORTFOLIO,
    portfolio,
  };
};

export const getAllPortfolios = () => {
  return async (dispatch) => {
    dispatch(fetchStart());
    const response = await axios.get(
      "https://serrla-api.up.railway.app/portofolios"
    );
    dispatch(getAllPortfoliosSuccess(response.data.data));
  };
};
