import axios from "axios";

export const GET_MODUL = "GET_MODUL";
export const FETCH_START = "FETCH_START";
export const GET_MODUL_SUCCESS = "GET_MODUL_SUCCESS";
export const GET_DETAIL_MODUL = "GET_DETAIL_MODUL";
export const SEARCH_MODUL = "SEARCH_MODUL";
export const FILTER_MODUL = "FILTER_MODUL";

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

export const searchModul = (search) => {
  return {
    type: SEARCH_MODUL,
    search,
  };
};

export const filterModul = (filter) => {
  return {
    type: FILTER_MODUL,
    filter,
  };
};

const getDetailModulSuccess = (detailModul) => {
  return {
    type: GET_DETAIL_MODUL,
    detailModul,
  };
};

export const getModul = () => {
  return async (dispatch) => {
    dispatch(fetchStart());
<<<<<<< HEAD
    const modul = await axios.get(
      "https://serrla-api.up.railway.app/courses"
    );
=======
    const modul = await axios.get("https://serrla-api.up.railway.app/courses");
>>>>>>> 929ae7dbeec159ec2ad1b6452229f22559193878
    dispatch(getModulSuccess(modul.data.data));
  };
};

export const getSearchedModul = (search) => {
  return async (dispatch) => {
    const searchModulData = await axios.get(
      `https://serrla-api.up.railway.app/courses/search?keyword=${search}`
    );
    dispatch(searchModul(searchModulData.data.data));
  };
};

export const getFilteredModul = (category) => {
  return async (dispatch) => {
    dispatch(fetchStart());
    const filterModulData = await axios.get(
<<<<<<< HEAD
      `https://serrla-api.up.railway.app/courses/filter?track=${
        category ?? ""
      }`
=======
      `https://serrla-api.up.railway.app/courses/filter?track=${category ?? ""}`
>>>>>>> 929ae7dbeec159ec2ad1b6452229f22559193878
    );
    dispatch(filterModul(filterModulData.data.data));
  };
};

export const getDetailModul = (id) => {
  return async (dispatch) => {
    dispatch(fetchStart());
    const modul = await axios.get(
      `https://serrla-api.up.railway.app/courses/${id}`
    );
    dispatch(getDetailModulSuccess(modul.data.data));
  };
};
