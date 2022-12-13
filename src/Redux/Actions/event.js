import axios from "axios";

export const FETCH_START = "FETCH_START";
export const GET_EVENTS = "GET_EVENTS";
export const GET_EVENT_FAVORITES = "GET_EVENT_FAVORITES";
export const POST_EVENT_FAVORITES = "POST_EVENT_FAVORITES";
export const SEARCH_EVENT = "SEARCH_EVENT";

export const fetchStart = () => {
  return {
    type: FETCH_START,
  };
};

export const getEventsSuccess = (events) => {
  return {
    type: GET_EVENTS,
    events,
  };
};

export const searchEvent = (search) => {
  return {
    type: SEARCH_EVENT,
    search,
  };
};

export const getEventFavoritesSuccess = (eventFavorites) => {
  return {
    type: GET_EVENT_FAVORITES,
    eventFavorites,
  };
};

export const postEventFavoritesSuccess = (eventFavorites) => {
  return {
    type: POST_EVENT_FAVORITES,
    eventFavorites,
  };
};

export const getEvents = () => {
  return async (dispatch) => {
    dispatch(fetchStart());
    const response = await axios.get(
      "https://serrla-api.up.railway.app/events"
    );
    dispatch(getEventsSuccess(response.data.data));
  };
};

export const getEventFavorites = () => {
  return (dispatch) => {
    dispatch(fetchStart());
    let token = localStorage.getItem("token");
    let id = localStorage.getItem("id");
    if (token) {
      axios
        .get(`https://serrla-api.up.railway.app/users/${id}/favorites`)
        .then((response) => {
          dispatch(getEventFavoritesSuccess(response.data.data));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
};

export const getSearchedEvent = (search) => {
  return async (dispatch) => {
    const searchEventData = await axios.get(
      `https://serrla-api.up.railway.app/events/search?keyword=${search}`
    );
    dispatch(searchEvent(searchEventData.data.data));
  };
};
