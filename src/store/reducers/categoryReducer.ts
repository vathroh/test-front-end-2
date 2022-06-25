import { Action } from "../actions"
import { ActionType } from "../actions/action-types"

interface CategoryState {
    categories: [] | null;
    error: string | null;
}

const initialState = {
   categories: null,
   error: null
}


const CategoryReducer = (state:CategoryState = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.GET_CATEGORIES:
            return { 
                ...state,
                categories: action.payload, 
                error: null
            }

        case ActionType.GET_CATEGORIES_FAIL:
            return { 
                ...state,
                categories: action.payload, 
                error: null
            }
        default:
            return state
    }
}

export default CategoryReducer