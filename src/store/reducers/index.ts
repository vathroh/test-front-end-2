import { combineReducers } from "redux";
import userReducer from "./userReducer";
import productReducer from "./productReducer";
import CategoryReducer from "./categoryReducer";

const reducers = combineReducers({
    userReducer,
    productReducer,
    CategoryReducer,
})

export default reducers

export type RootState = ReturnType<typeof reducers>;