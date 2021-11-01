import { ERROR, GET_SELECTED_ITEM } from "../constants/types";
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