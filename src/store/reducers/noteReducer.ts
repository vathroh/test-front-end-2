import { Action } from "../actions";
import { ActionType } from "../actions/action-types";

export interface NoteState {
    loading: boolean;
    error: string | null;
    data: string | null;
}

const initialState = {
    loading: false,
    error: null,
    data: null
}

const noteReducer = (state: NoteState = initialState, action: Action): NoteState => {
    switch (action.type) {
        case ActionType.GET_NOTES:
            return {
                ...state, loading: true, error: null, data: null
            }
        case ActionType.POST_NOTES:
            return {
                ...state, loading: true, error: null, data: null
            }
        default:
            return state
    }
}

export default noteReducer