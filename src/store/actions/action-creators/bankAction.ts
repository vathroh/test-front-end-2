import { Dispatch } from "redux"
import { Action } from ".."
import { ActionType } from "../action-types"

export const depositMoney = (amount:number) => {
    return (dispatch:Dispatch<Action>) => {
        dispatch({
            type: ActionType.DEPOSIT,
            payload: amount
        })
    }
}