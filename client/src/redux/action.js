import {createActions} from 'redux-actions'
//fnc get type of actions
export const getTypeActions = (reduxActions) => {
    return reduxActions().type
}
//action for page products
export const getProducts = createActions({
    getProductsRequest: (payload => payload),
    getProductsSuccess: (payload => payload),
    getProductsFailure: (err => err),
})
