import { ERROR, GET_SEARCH_ITEMS } from "../constants/types"
import SearchService from "../service/SearchService";

export const getSearhItems = query => async dispatch => {
    try {
        const data = await SearchService.getSearchbyQuery(query);

        dispatch({
            type:GET_SEARCH_ITEMS,
            payload: data
        });
    }
    catch (error) {
        dispatch({
            type: ERROR,
            payload: `Error ${error}`
        });
    }
}