import axios from "axios"
import { Dispatch } from "redux"
import { ActionType } from "../action-types"

export const getCategories = (token: string, tenantId: string) => {
    return async(dispatch: Dispatch)=>{
        await axios({
            method: 'GET',
            url: 'https://api.warung.io/admin/tenant/ecommerce/products/categories?page=1&perPage=400&search=&ids=&isParent=&parents=',
            timeout: 12000,
            headers: {
               'Authorization': 'Bearer ' + token,
               'x-tenant-id': tenantId
            }
        })
        .then((response)=>{
            dispatch({
                type: ActionType.GET_CATEGORIES,
                payload: response.data.data
            })
        })
        .catch((error)=>{
            dispatch({
                type: ActionType.GET_CATEGORIES_FAIL,
                payload: error.message
            })
        })
    }
}