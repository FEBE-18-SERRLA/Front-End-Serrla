import {
  SIGN_UP,
  SIGN_IN_START,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_OUT,
} from "../Actions/authActions";

const initialState = {
  user: [],
  loading: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP:
      return {
        ...state,
        user: action.user,
      };

    case SIGN_IN_START:
      return {
        ...state,
        loading: true,
      };

    case SIGN_IN_SUCCESS:
      return {
        ...state,
        loading: false,
        token: action.token,
        user: action.user,
      };

    case SIGN_IN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    case SIGN_OUT:
      return {
        ...state,
        token: null,
        user: null,
        id: null,
      };

    default:
      return state;
  }
};

export default authReducer;
