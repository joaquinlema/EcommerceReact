import { CLEAN_COMPRA, CLEAN_PRODUCT_INFO, COMPRAR_PRODUCTO, ERROR, GET_SELECTED_ITEM, SET_LOADING_PRODUCT } from "../constants/types";
import ProductService from "../service/ProductService";

export const getSelectedProduct = id => async dispatch => {
    try {
        const productData = await ProductService.getSelectedProductById(id);
        const productDescription = await ProductService.getSelectedProductDescription(id);

        dispatch({
            type:GET_SELECTED_ITEM,
            payload: {productData : productData.data, productDescription :productDescription.data}
        });
    }
    catch (error) {
        dispatch({
            type: ERROR,
            payload: `Error ${error}`
        });
    }
}

export const setLoadingProduct = status => dispatch => {
    dispatch({
        type: SET_LOADING_PRODUCT,
        payload: status
    });
}

export const cleanProduct = () => dispatch => {
    dispatch({
        type: CLEAN_PRODUCT_INFO,
    });
}

export const comprarProduct = values => dispatch => {
    dispatch({
        type: COMPRAR_PRODUCTO,
        payload: values
    });
}

export const cleanComprarProduct = () => dispatch => {
    dispatch({
        type: CLEAN_COMPRA,
    });
}