import axios from "axios";

export const SIGN_UP = "SIGN_UP";
export const SIGN_IN = "SIGN_IN";

export const postSignUpSuccess = (user) => {
  return {
    type: SIGN_UP,
    user,
  };
};

export const postSignInSuccess = (user) => {
  return {
    type: SIGN_IN,
    user,
  };
};

export const signUp = (user) => {
  return async (dispatch) => {
    const response = await axios.post(
      "https://tesbe-production.up.railway.app/users",
      user,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    dispatch(postSignUpSuccess(response.data));
  };
};

export const signIn = (user) => {
  return async (dispatch) => {
    const response = await axios.get(
      "https://634e1a17b8ce95a1dd7e9aa0.mockapi.io/users",
      user
    );
    dispatch(postSignInSuccess(response.data));
  };
};
