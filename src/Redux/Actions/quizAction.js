import axios from "axios";
import { GET_DETAIL_MODUL } from "./modulActions";

export const GET_QUIZ = "GET_QUIZ";
export const FETCH_START = "FETCH_START";
export const GET_QUIZ_SUCCESS = "GET_QUIZ_SUCCESS";
export const GET_DETAIL_QUIZ = "GET_DETAIL_QUIZ";

const fetchStart = () => {
    return {
      type: FETCH_START,
    };
  };
  
const getQuizSuccess = (quiz) => {
    return {
      type: GET_QUIZ_SUCCESS,
      quiz,
    };
};

const getDetailQuizSuccess = (detailQuiz) => {
    return {
      type: GET_DETAIL_QUIZ,
      detailQuiz,
    };
  };
  
export const getQuiz = () => {
    return async (dispatch) => {
      dispatch(fetchStart());
      const quiz = await axios.get(
        "https://63871fd2d9b24b1be3e6a211.mockapi.io/Quiz?"
      );
      dispatch(getQuizSuccess(quiz.data));
    };
};

export const getDetailQuiz = (id) => {
    return async (dispatch) => {
      dispatch(fetchStart());
      const quiz = await axios.get(
        `https://63871fd2d9b24b1be3e6a211.mockapi.io/Quiz/${id}/Questions/${id}`
      );
      dispatch(getDetailQuizSuccess(quiz.data));
    };
};