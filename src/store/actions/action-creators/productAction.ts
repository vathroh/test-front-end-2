import axios from "axios"
import { Dispatch } from "redux"
import { ActionType } from "../action-types"

export const getProductList = (token: string, tenantId: string) => {
    return async (dispatch:Dispatch) => {
        await axios({
            method: 'GET',
            url: 'https://api.development.warung.io/admin/tenant/ecommerce/products?page=1&perPage=10&search=&category=&isFeatured=&isPromo=&status=PUBLISHED&locationId=&ids=',
            timeout: 12000,
            headers: {
                'Authorization': 'Bearer ' + token,
                'x-tenant-id': tenantId
            }
        })
        .then((response) =>{
            dispatch({
                type: ActionType.GET_PRODUCT_LIST_SUCCESS,
                payload: response.data.data
            })

        })
    }
}