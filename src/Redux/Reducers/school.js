import { GET_SCHOOL } from "Redux/Actions/school";

const initialState = {
  school: [],
};

const schoolReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SCHOOL:
      return {
        ...state,
        school: action.school,
      };
    default:
      return state;
  }
};

export default schoolReducer;
