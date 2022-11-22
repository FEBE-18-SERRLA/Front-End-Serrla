import axios from "axios";

export const GET_MODUL = "GET_MODUL";
export const FETCH_START = "FETCH_START";
export const GET_MODUL_SUCCESS = "GET_MODUL_SUCCESS";

const fetchStart = () => {
  return {
    type: FETCH_START,
  };
};

const getModulSuccess = (modul) => {
  return {
    type: GET_MODUL_SUCCESS,
    modul,
  };
};

export const getModul = () => {
  return async (dispatch) => {
    dispatch(fetchStart());
    const modul = await axios.get(
      "https://634e1a17b8ce95a1dd7e9aa0.mockapi.io/moduls?"
    );
    dispatch(getModulSuccess(modul.data));
  };
};
