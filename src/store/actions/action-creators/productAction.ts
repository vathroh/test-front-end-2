import axios from "axios"
import { Dispatch } from "redux"
import { ActionType } from "../action-types"

const baseURL:string = 'https://api.warung.io'

export const getProductList = (token: string, tenantId: string, page: number = 1, pageSize:number = 20 ) => {
    return async (dispatch:Dispatch) => {
        await axios({
            method: 'GET',
            url: baseURL + '/admin/tenant/ecommerce/products?page=' + page + '&perPage=' + pageSize + '&search=&category=&isFeatured=&isPromo=&status=PUBLISHED&locationId=&ids=',
            timeout: 12000,
            headers: {
                'Authorization': 'Bearer ' + token,
                'x-tenant-id': tenantId
            }
        })
        .then((response) =>{
            dispatch({
                type: ActionType.GET_PRODUCT_LIST_SUCCESS,
                payload: response.data
            })

        })
    }
}

export const deleteProduct = (token: string, tenantId: string, id:string) => {
    return async (dispatch:Dispatch) => {
        axios({
            method: 'DELETE',
            url: baseURL + '/admin/tenant/ecommerce/products/' + id,
            timeout: 12000,
            headers: {
                'Authorization': 'Bearer ' + token,
                'x-tenant-id': tenantId
            }            
        })
        .then((response)=>{
            console.log(response)
            dispatch({
                type: ActionType.DELETE_PRODUCT_SUCCESS,
                payload: response.data.meta.message
            })
        })
        .catch((error) => {
            dispatch({
                type: ActionType.DELETE_PRODUCT_FAIL,
                payload: error.message
            })
        })
    } 
}