import { Action } from "../actions";
import { ActionType } from "../actions/action-types";

export interface UserState {
    isLogin: boolean;
    loading: boolean;
    error: string | null;
    data: {} | null;
}

const initialState = {
    isLogin: false,
    loading: false,
    error: null,
    data: null,
}

const userReducer = (state: UserState = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.GET_USER_REQUEST:
            return { isLogin: false, loading: true, error: null, data: null }
        case ActionType.GET_USER_SUCCESS:
            return { isLogin: true, loading: false, error: null, data: action.payload}
        case ActionType.GET_USER_FAIL:
            return { islogin: false, loading: false, error: action.payload }
        case ActionType.GET_LOG_OUT:
            return { isLogin: false, loading: false, error: null, data: null}
        default:
            return state
    }
}

export default userReducer