import axios from "axios";

export const SIGN_UP = "SIGN_UP";

export const postSignUpSuccess = (user) => {
  return {
    type: SIGN_UP,
    user,
  };
};

export const signUp = (user) => {
  return async (dispatch) => {
    const response = await axios.post(
      "https://634e1a17b8ce95a1dd7e9aa0.mockapi.io/users",
      user
    );
    dispatch(postSignUpSuccess(response.data));
  };
};
