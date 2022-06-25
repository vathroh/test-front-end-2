import { ActionType } from "./action-types";

interface getUserRequestAction{
    type: ActionType.GET_USER_REQUEST
}

interface GetUserSuccessAction{
    type: ActionType.GET_USER_SUCCESS,
    payload: {}
}

interface GetUserFailAction {
    type: ActionType.GET_USER_FAIL,
    payload: string
}

interface GetLogout {
    type: ActionType.GET_LOG_OUT
}

interface GetProductListSuccess {
    type: ActionType.GET_PRODUCT_LIST_SUCCESS,
    payload: {}
}

interface GetProductList {
    type: ActionType.GET_PRODUCT_LIST,
}

interface GetProductListFail {
    type: ActionType.GET_PRODUCT_LIST_FAIL,
    payload: string
}

interface GetCategories {
    type: ActionType.GET_CATEGORIES,
    payload: string
}

interface GetCategoriesFail {
    type: ActionType.GET_CATEGORIES_FAIL,
    payload: string
}

interface deleteProduct {
    type: ActionType.DELETE_PRODUCT
}

interface deleteProductSuccess {
    type: ActionType.DELETE_PRODUCT_SUCCESS,
    payload: string
}

interface deleteProductFail {
    type: ActionType.DELETE_PRODUCT_FAIL,
    payload: string
}


export type Action =  
| getUserRequestAction
| GetUserSuccessAction
| GetUserFailAction
| GetLogout
| GetProductList
| GetProductListSuccess
| GetProductListFail
| GetCategories
| GetCategoriesFail
| deleteProduct
| deleteProductSuccess
| deleteProductFail