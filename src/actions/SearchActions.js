import { ERROR } from "../constants/types"
import SearchService from "../service/SearchService";

export const getSearhItems = query => async dispatch => {
    try {
        const data = await SearchService.getSearchbyQuery(query);
    }
    catch (error) {
        dispatch({
            type: ERROR,
            payload: `Error ${error}`
        })
    }
}