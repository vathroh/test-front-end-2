import { ActionType } from "./action-types";

interface GetNoteAction {
    type: ActionType.GET_NOTES
}

interface PostNoteAction {
    type: ActionType.POST_NOTES
}

interface DepositAction {
    type: ActionType.DEPOSIT,
    payload: number
}

interface WithdrawAction {
    type: ActionType.WITHDRAW,
    payload: number
}

interface BankruptAction {
    type: ActionType.BANKRUPT
}

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


export type Action = GetNoteAction 
| PostNoteAction
| DepositAction
| WithdrawAction
| BankruptAction
| getUserRequestAction
| GetUserSuccessAction
| GetUserFailAction
| GetLogout
| GetProductList
| GetProductListSuccess
| GetProductListFail