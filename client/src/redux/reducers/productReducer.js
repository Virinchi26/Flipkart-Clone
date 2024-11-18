import * as actionTypes from "../constants/productConstant";

export const getProductsReducer = (state = { products: [] }, action) => {
    switch(action.type){
        case actionTypes.GET_PRODUCTS_SUCCESS:
            return {products: action.payload};
        case actionTypes.GET_PRODUCTS_FAIL:
            return {error: action.payload};
        default:
            return state;
    }
};
//always remember to add the default state in the reducer and it will be an empty object or array depending on the state and will be returned in the default case of the switch statement
export const getProductDetailsReducer = (state = { product: {} }, action) => {
    switch(action.type){
        case actionTypes.GET_PRODUCT_DETAILS_REQUEST:
            return {loading: true};
        case actionTypes.GET_PRODUCT_DETAILS_SUCCESS:
            return {loading: false, product: action.payload};
        case actionTypes.GET_PRODUCT_DETAILS_FAIL:
            return {error: action.payload};
        case actionTypes.GET_PRODUCT_DETAILS_RESET:
            return {product: {}};
        default:
            return state;
    }
}
