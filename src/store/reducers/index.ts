import { combineReducers } from "redux";
import noteReducer from "./noteReducer";
import bankReducer from "./bankReducer";
import userReducer from "./userReducer";
import productReducer from "./productReducer";

const reducers = combineReducers({
    noteReducer,
    bankReducer,
    userReducer,
    productReducer
})

export default reducers

export type RootState = ReturnType<typeof reducers>;