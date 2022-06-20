import { Action } from "../actions"
import { ActionType } from "../actions/action-types"

const initialState = 0

const bankReducer = (state:number = initialState, action: Action): number => {
    switch(action.type){
        case ActionType.DEPOSIT:
            return state + action.payload
        default:
            return state
    }
}

export default bankReducer