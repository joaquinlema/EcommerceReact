import { ERROR, GET_SEARCH_ITEMS, SET_LOADING } from "../constants/types";

const initialState = {
    searchResults: [],
    error: null,
    searchquery: '',
    loading: false
}
// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case GET_SEARCH_ITEMS:
            return {
                ...state,
                searchResults: payload.data,
                loading: false
            }
        case SET_LOADING:
            return {
                ...state,
                loading: payload.status
            }
        case ERROR:
            return {
                ...state,
                error: payload
            }
        default:
            return state;
    }
}