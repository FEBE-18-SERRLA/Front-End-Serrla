import axios from "axios";

export const GET_EVENTS = "GET_EVENTS";

export const getEventsSuccess = (events) => {
  return {
    type: GET_EVENTS,
    events,
  };
};

export const getEvents = () => {
  return async (dispatch) => {
    const response = await axios.get(
      "https://tesbe-production.up.railway.app/events"
    );
    dispatch(getEventsSuccess(response.data));
  };
};
