import axios from "axios";

export const SIGN_UP = "SIGN_UP";
export const SIGN_IN_START = "SIGN_IN_START";
export const SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS";
export const SIGN_IN_FAILURE = "SIGN_IN_FAILURE";
export const GET_USER = "GET_USER";

export const postSignUpSuccess = (user) => {
  return {
    type: SIGN_UP,
    user,
  };
};
export const signInStart = () => {
  return {
    type: SIGN_IN_START,
  };
};

export const postSignInSuccess = (token, user) => {
  return {
    type: SIGN_IN_SUCCESS,
    token,
    user,
  };
};

export const postSignInFailure = (error) => {
  return {
    type: SIGN_IN_FAILURE,
    error,
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

export const signIn = (email, password) => {
  return function (dispatch) {
    dispatch(signInStart());
    axios
      .post(
        "https://tesbe-production.up.railway.app/auth/login",
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      )
      .then((res) => {
        let token = res.data.token;
        dispatch(postSignInSuccess(token));
        localStorage.setItem("token", JSON.stringify(token));
        localStorage.setItem("id", JSON.stringify(res.data.data.id));
        // mengambil data user
        axios
          .get(
            `https://tesbe-production.up.railway.app/users/${res.data.data.id}`
          )
          .then((res) => {
            dispatch(postSignInSuccess(token, res.data.data));
          });
      })
      .catch((err) => dispatch(postSignInFailure(err.response.data.message)));
  };
};
