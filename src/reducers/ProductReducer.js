import { ERROR, GET_SELECTED_ITEM, SET_LOADING, SET_LOADING_PRODUCT } from "../constants/types";

const initialState = {
    productData: {},
    productDescription:{},
    error: null,
    loadingProduct: false
}
// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case GET_SELECTED_ITEM:
            return {
                ...state,
                productData: payload.productData,
                productDescription: payload.productDescription,
                loadingProduct: false
            }
        case SET_LOADING_PRODUCT:
            return {
                ...state,
                loadingProduct: payload
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