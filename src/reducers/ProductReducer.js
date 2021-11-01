import { CLEAN_PRODUCT_INFO, COMPRAR_PRODUCTO, ERROR, GET_SELECTED_ITEM, SET_LOADING_PRODUCT } from "../constants/types";

const initialState = {
    productData: {},
    productDescription: {},
    error: null,
    loadingProduct: false,
    productosComprados: [],
    compradoOk: false

}
// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case COMPRAR_PRODUCTO: 
        return {
            ...state,
            productosComprados: [...state.productosComprados, payload],
            compradoOk: true
        }
        case CLEAN_PRODUCT_INFO :
            return {
                ...state,
                productData: {},
                productDescription: {},
                loadingProduct: false
            }
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