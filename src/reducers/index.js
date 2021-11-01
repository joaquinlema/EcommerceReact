import { combineReducers } from "redux";
import SearchReducer from "./SearchReducer";
import ProductReducer from './ProductReducer';
import AlertReducer from './AlertReducer';

export default combineReducers({
    SearchReducer,
    ProductReducer,
    AlertReducer
});