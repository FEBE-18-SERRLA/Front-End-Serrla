import axios from "axios";

export const GET_EVENTS = "GET_EVENTS";
export const GET_EVENT_FAVORITES = "GET_EVENT_FAVORITES";

export const getEventsSuccess = (events) => {
  return {
    type: GET_EVENTS,
    events,
  };
};

export const getEventFavoritesSuccess = (eventFavorites) => {
  return {
    type: GET_EVENT_FAVORITES,
    eventFavorites,
  };
};

export const getEvents = () => {
  return async (dispatch) => {
    const response = await axios.get(
      "https://tesbe-production.up.railway.app/events"
    );
    dispatch(getEventsSuccess(response.data.data));
  };
};

export const getEventFavorites = () => {
  return (dispatch) => {
    let token = localStorage.getItem("token");
    let id = localStorage.getItem("id");
    if (token) {
      axios
        .get(`https://tesbe-production.up.railway.app/users/${id}/favorites`)
        .then((response) => {
          console.log(response.data.data[0].event_id);
          dispatch(getEventFavoritesSuccess(response.data.data));
          axios
            .get(
              `https://tesbe-production.up.railway.app/users/${id}/favorites/${response.data.data[0].event_id}`
            )
            .then((response) => {
              console.log(response.data);
            });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
};
