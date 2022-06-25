import { Action } from "../actions";
import { ActionType } from "../actions/action-types";

interface ProductState {
    loading: boolean;
    products: [] | null;
    error: string | null;
}

const initialState = {
    loading: true,
    products: null,
    error: null
}

const productReducer = (state: ProductState = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.GET_PRODUCT_LIST:
            return {
                ...state,
                loading: true,
                products: null,
                error: null
            }
        case ActionType.GET_PRODUCT_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload,
                error: null
            }
        case ActionType.GET_PRODUCT_LIST_FAIL:
            return {
                ...state,
                loading: false,
                products: null,
                error: action.payload
            }
        case ActionType.DELETE_PRODUCT_SUCCESS:
            return {
                deleteProductSuccess: action.payload,
                error: null
            }
        default:
            return state
    }
}

export default productReducer