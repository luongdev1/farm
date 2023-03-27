import {INIT_STATE} from './constant'
import {combineReducers} from 'redux'
import {getTypeActions, getProducts, getClassify, changeClassify} from './action'

export  function productReducers(state = INIT_STATE.products, action) {
    switch(action.type) 
        {
            case getTypeActions(getProducts.getProductsRequest): {
                return {
                    ...state,
                    isLoading: true
                }
            }
            case getTypeActions(getProducts.getProductsSuccess): {
                 return {
                    ...state,
                    listProducts: action.payload,
                    isLoading: false
                }
            }
            case getTypeActions(getProducts.getProductsFailure): {
                return {
                    ...state,
                    isLoading: true
                }
            }
            case getTypeActions(getClassify.getClassifySuccess): {
                return {
                    ...state,
                    classify: [...state.classify, action.payload]
                }
            }
            case getTypeActions(changeClassify.changeClassifySuccess): {
                const newClassify = [...state.classify]
                newClassify.splice(newClassify.indexOf(action.payload), 1)
                return {
                    ...state,
                    classify: [...newClassify]
                }
             }
            default: return state
        }
}

export const reducer = combineReducers({
    productReducers
})

