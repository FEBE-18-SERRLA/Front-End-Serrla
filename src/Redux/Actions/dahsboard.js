import axios from "axios";

export const FETCH_START = "FETCH_START";
export const POST_MODUL_DASHBOARD = "POST_MODUL_DASHBOARD";
export const GET_MODUL_DASHBOARD = "GET_MODUL_DASHBOARD";

const fetchStart = () => {
  return {
    type: FETCH_START,
  };
};

const postModulDashboardSuccess = (modul) => {
  return {
    type: POST_MODUL_DASHBOARD,
    modul,
  };
};

const getModulDashboardSuccess = (modul) => {
  return {
    type: GET_MODUL_DASHBOARD,
    modul,
  };
};

export const postModulDashboard = (courseId) => {
  return async (dispatch) => {
    dispatch(fetchStart());
    let token = localStorage.getItem("token");
    let id = localStorage.getItem("id");
    if (token) {
      const modul = await axios.post(
        `https://serrla-api.up.railway.app/users/${id}/my_dashboards`,
        {
          course_id: courseId,
        }
      );
      console.log("modul", modul);
      dispatch(postModulDashboardSuccess(modul.data.data));
    }
  };
};

export const getModulDashboard = () => {
  return async (dispatch) => {
    dispatch(fetchStart());
    let token = localStorage.getItem("token");
    let id = localStorage.getItem("id");
    if (token) {
      const modul = await axios.get(
        `https://serrla-api.up.railway.app/users/${id}/my_dashboards`
      );
      dispatch(getModulDashboardSuccess(modul.data.data));
    }
  };
};
