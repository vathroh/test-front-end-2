import { Dispatch } from "redux"
import { Action } from ".."
import { ActionType } from "../action-types"

export const getNotes = () => {
    return async (dispatch:Dispatch<Action>) => {
        dispatch({
            type: ActionType.GET_NOTES
        })

        try {

        } catch (error) {
            
        }
    }
}