import axios from "axios";
import Swal from "sweetalert2";

export const SIGN_UP = "SIGN_UP";
export const SIGN_IN_START = "SIGN_IN_START";
export const SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS";
export const SIGN_IN_FAILURE = "SIGN_IN_FAILURE";
export const SIGN_OUT = "SIGN_OUT";

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

export const signOutSuccess = () => {
  return {
    type: SIGN_OUT,
  };
};

export const signUp = (user) => {
  return async (dispatch) => {
    const response = await axios.post(
      "https://serrla-api.up.railway.app/users",
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

export const signIn = (email, password) => {
  return function (dispatch) {
    dispatch(signInStart());
    axios
      .post(
        "https://serrla-api.up.railway.app/auth/login",
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
          .get(`https://serrla-api.up.railway.app/users/${res.data.data.id}`)
          .then((res) => {
            dispatch(postSignInSuccess(token, res.data.data));
          });
        Swal.fire({
          icon: "success",
          title: "Login Success",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          window.location.href = "/";
        });
      })
      .catch((err) => {
        dispatch(postSignInFailure(err));
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Wrong Email or Password!",
        });
      });
  };
};

export const signOut = () => (dispatch) => {
  localStorage.removeItem("token");
  localStorage.removeItem("id");
  dispatch(signOutSuccess());
};
