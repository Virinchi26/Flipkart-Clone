
import * as actionType from '../constants/cartConstants';

// state is the current state of the application(already present in the redux)
// action is the object that is dispatched to the store (which will be stored in the redux)
export const cartReducer =(state, action) =>{

    switch(action.type){
        case actionType.ADD_TO_CART:
            const item = action.payload;
            const existItem = state.cart.find((x) => x.product === item.product);
            if(existItem){
                return{
                    ...state,
                    cart: state.cart.map((x) => x.product === existItem.product ? item : x),
                };
            }else{
                return{
                    ...state,
                    cart: [...state.cart, item],
                };
            }
        case actionType.REMOVE_FROM_CART:
            return{
                ...state,
                cart: state.cart.filter((x) => x.product !== action.payload),
            };
        case CART_RESET:
            return{
                ...state,
                cart: [],
            };
        default:
            return state;
    }
}