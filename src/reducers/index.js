import { combineReducers } from "redux";
import SearchReducer from "./SearchReducer";
import ProductReducer from './ProductReducer';

export default combineReducers({
    SearchReducer,
    ProductReducer
});