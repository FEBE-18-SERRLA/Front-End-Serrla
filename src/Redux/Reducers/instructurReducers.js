import { FETCH_START, GET_INSTRUCTUR_SUCCESS } from "../Actions/instructurActions";

const initialState = {
    instructur: [],
    isLoading: false
}

const modulReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_START:
            return {
                ...state,
                isLoading: true
            }
        case GET_INSTRUCTUR_SUCCESS:
            return {
                ...state,
                instructur: action.instructur,
                isLoading: false
            }
        default:
            return state;
    }
}

export default modulReducer;