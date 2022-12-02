import axios from "axios";

export const GET_SCHOOL = "GET_SCHOOL";

export const getSchoolSuccess = (school) => {
  return {
    type: GET_SCHOOL,
    school,
  };
};

export const getSchool = () => {
  return (dispatch) => {
    axios
      .get("https://serrla-api.up.railway.app/schools")
      .then((response) => {
        dispatch(getSchoolSuccess(response.data));
      })
      .catch((error) => {
        throw error;
      });
  };
};
