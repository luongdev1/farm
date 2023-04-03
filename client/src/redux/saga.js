import { put, takeLatest, call } from 'redux-saga/effects'
import * as action from './action'
import { fetchProducts, fetchProductCart, addProductCart, updateProductCart } from '../assets/API'
 // products
function* fetchProductsSaga(actions) {
    try {
        const products = yield call(fetchProducts, actions.payload)
        yield put(action.getProducts.getProductsSuccess(products.data))
    } catch (error) {
        yield put(action.getProducts.getProductsFailure(error))
    }
}
// classify
function* getClassifySaga(actions) {
    try {
        yield put(action.getClassify.getClassifySuccess(actions.payload))
    } catch (error) {
        yield put(action.getClassify.getClassifyFailure(error))
    }
}

function* changeClassifySaga(actions) {
    try {
        yield put(action.changeClassify.changeClassifySuccess(actions.payload))
    } catch (error) {
        yield put(action.changeClassify.changeClassifyFailure(error))
    }
}
// cart
function* fetchCartSaga(actions) {
    try {
        const cart = yield call(fetchProductCart)
        yield put(action.fetchCart.fetchCartSuccess(cart.data))
    } catch (error) {
        yield put(action.fetchCart.fetchCartFailure(error))
    }
}

function* addProductCartSaga(actions) {
    try {
        const product = yield call(addProductCart, actions.payload)
        yield put(action.addProductCart.addProductCartSuccess(product.data))
     } catch (error) {
        yield put(action.addProductCart.addProductCartFailure(error))
    }
}

function* updateProductCartSaga(actions) {
    try {
        const product = yield call(updateProductCart, actions.payload)
        console.log(product);
        // yield put(action.updateProductCart.updateProductCartSuccess(product.data))
       } catch (error) {
        yield put(action.updateProductCart.updateProductCartFailure(error))
    }
}

function* mySaga() {
    yield takeLatest(action.getProducts.getProductsRequest, fetchProductsSaga)
    yield takeLatest(action.getClassify.getClassifyRequest, getClassifySaga)
    yield takeLatest(action.changeClassify.changeClassifyRequest, changeClassifySaga)
    yield takeLatest(action.fetchCart.fetchCartRequest, fetchCartSaga)
    yield takeLatest(action.addProductCart.addProductCartRequest, addProductCartSaga)
    yield takeLatest(action.updateProductCart.updateProductCartRequest, updateProductCartSaga)
}

export default mySaga