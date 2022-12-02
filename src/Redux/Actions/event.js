import axios from "axios";

export const FETCH_START = "FETCH_START";
export const GET_EVENTS = "GET_EVENTS";
export const GET_EVENT_FAVORITES = "GET_EVENT_FAVORITES";
export const POST_EVENT_FAVORITES = "POST_EVENT_FAVORITES";

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
      "https://tesbe-production.up.railway.app/events"
    );
    dispatch(getEventsSuccess(response.data.data));
    const data = response.data.data;
    const eventById = data.map((event) => event.id);
    localStorage.setItem("eventById", JSON.stringify(eventById));
  };
};

// export const getEventById = (id) => {
//   return async (dispatch) => {
//     dispatch(fetchStart());
//     const response = await axios.get(
//       `https://tesbe-production.up.railway.app/events/${id}`
//     );
//     dispatch(getEventsSuccess(response.data.data));
//   };
// };

export const getEventFavorites = () => {
  return (dispatch) => {
    dispatch(fetchStart());
    let token = localStorage.getItem("token");
    let id = localStorage.getItem("id");
    if (token) {
      axios
        .get(`https://tesbe-production.up.railway.app/users/${id}/favorites`)
        .then((response) => {
          dispatch(getEventFavoritesSuccess(response.data.data));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
};

// export const postEventFavorites = () => {
//   return (dispatch) => {
//     dispatch(fetchStart());
//     let token = localStorage.getItem("token");
//     let id = localStorage.getItem("id");
//     let eventId = localStorage.getItem("eventById");
//     if (token) {
//       axios.post(`https://tesbe-production.up.railway.app/users/${id}/favorites`, {
//         event_id: eventId,
//       })
//     }
//   };
// };
