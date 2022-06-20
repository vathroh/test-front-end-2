import { applyMiddleware, createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Persistor, persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import reducers from "./reducers";
import userReducer from "./reducers/userReducer";
import storage from "redux-persist/lib/storage";

const persistedReducer = persistReducer({
    key: 'root', storage
}, reducers)

export const store:Store = createStore(persistedReducer, {}, composeWithDevTools(applyMiddleware(thunk)))

export const persistor:Persistor = persistStore(store)
