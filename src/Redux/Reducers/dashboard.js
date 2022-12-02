import {
  POST_MODUL_DASHBOARD,
  GET_MODUL_DASHBOARD,
  FETCH_START,
} from "../Actions/dahsboard";

const initialState = {
  modulDashboard: [],
  isLoading: false,
};

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        isLoading: true,
      };
    case POST_MODUL_DASHBOARD:
      return {
        ...state,
        modulDashboard: action.modul,
        isLoading: false,
      };
    case GET_MODUL_DASHBOARD:
      return {
        ...state,
        modulDashboard: action.modul,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default dashboardReducer;
