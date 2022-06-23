import axios from "axios"
import { Dispatch } from "redux"
import { ActionType } from "../action-types"


export const getLogin = (email: string, password: string) => {

    
    return async (dispatch: Dispatch) => {

        dispatch({
            type: ActionType.GET_USER_REQUEST
        })
        
        await axios({
            method: 'POST',
            url: 'https://api.development.warung.io/admin/tenant/auth/login-with-email',
            timeout: 120000,
            data: {
                email: email,
                password: password
            }
        }).then((response) => {

            dispatch({
                type: ActionType.GET_USER_SUCCESS,
                payload: {
                    token: response.data.data.token,
                    user: response.data.data.user,
                },
                token:  response.data.data.token,
            })

        })
        .catch((error)=>{

            dispatch({
                type: ActionType.GET_USER_FAIL,
                payload: error.message
            })
        })
    }
}

export const getLogout = () => {
        
    return async (dispatch: Dispatch) => {
        dispatch({
            type: ActionType.GET_LOG_OUT
        })
    }
}