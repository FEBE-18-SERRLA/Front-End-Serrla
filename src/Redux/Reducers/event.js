import { GET_EVENTS, GET_EVENT_FAVORITES } from "Redux/Actions/event";

const initialState = {
  events: [],
  like: false,
};

export default function eventReducer(state = initialState, action) {
  switch (action.type) {
    case GET_EVENTS:
      return {
        ...state,
        events: action.events,
      };
    case GET_EVENT_FAVORITES:
      return {
        ...state,
        eventFavorites: action.eventFavorites,
        like: true,
      };

    default:
      return state;
  }
}
