import {
  FETCH_START,
  GET_EVENTS,
  GET_EVENT_FAVORITES,
} from "Redux/Actions/event";

const initialState = {
  events: [],
  like: false,
  isloading: false,
};

export default function eventReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        isloading: true,
      };

    case GET_EVENTS:
      return {
        ...state,
        events: action.events,
        isloading: false,
      };

    case GET_EVENT_FAVORITES:
      return {
        ...state,
        eventFavorites: action.eventFavorites,
        like: true,
        isloading: false,
      };

    default:
      return state;
  }
}
