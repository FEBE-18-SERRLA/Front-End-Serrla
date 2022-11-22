import axios from 'axios';

export const GET_INSTRUCTUR = 'GET_INSTRUCTUR';
export const FETCH_START = 'FETCH_START';
export const GET_INSTRUCTUR_SUCCESS = 'GET_INSTRUCTUR_SUCCESS';

const fetchStart = () => {
    return {
        type: FETCH_START,
    };
};

const getInstructurSuccess = (instructur) => {
    return {
        type: GET_INSTRUCTUR_SUCCESS,
        instructur,
    };
};

export const getInstructur = () => {
    return async (dispatch) => {
        dispatch(fetchStart());
        const instructur = await axios.get('https://634e1a17b8ce95a1dd7e9aa0.mockapi.io/instructurs');
        dispatch(getInstructurSuccess(instructur.data));
    }
}