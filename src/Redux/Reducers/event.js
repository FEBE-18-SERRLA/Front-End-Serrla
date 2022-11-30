import { GET_EVENTS } from "Redux/Actions/event";

const initialState = {
  events: [],
};

export default function eventReducer(state = initialState, action) {
  switch (action.type) {
    case GET_EVENTS:
      return {
        ...state,
        events: action.events,
      };
    default:
      return state;
  }
}
