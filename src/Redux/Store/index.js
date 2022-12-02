import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import modulReducers from "../Reducers/modulReducers";
import instructurReducers from "../Reducers/instructurReducers";
import authReducer from "../Reducers/authReducers";
import eventReducer from "Redux/Reducers/event";
import userReducer from "Redux/Reducers/user";
import schoolReducer from "Redux/Reducers/school";
import dashboardReducer from "Redux/Reducers/dashboard";

const allReducer = combineReducers({
  modul: modulReducers,
  instructur: instructurReducers,
  auth: authReducer,
  user: userReducer,
  event: eventReducer,
  school: schoolReducer,
  dashboard: dashboardReducer,
});

const store = createStore(allReducer, applyMiddleware(thunk));

export default store;
