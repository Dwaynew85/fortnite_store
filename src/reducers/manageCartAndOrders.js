import { combineReducers } from 'redux';

const cartReducer = (state = { cart: []}, action) => {    
    switch (action.type) {
        
    case "ADD_TO_CART":
        return { 
            ...state,
            cart: [
                ...state.cart, 
                action.item
            ]};
    case "DELETE_FROM_CART":
        const cart = state.cart.filter(item => `${item.id}` !== action.item.id)
        return { cart }

    default:
        return state
    }
}

const ordersReducer = (state = { orders: [], requesting: false }, action) => {
    switch (action.type) {

        case 'START_ADDING_ORDERS_REQUEST':
            return { 
                ...state,
                orders: [...state.orders],
                requesting: true
        }

        case 'ADD_ORDERS':
            return {
                ...state,
                orders: action.orders,
                requesting: false
            }

        default:
            return state
    }
}

const rootReducer = combineReducers({
    cart: cartReducer,
    orders: ordersReducer
});

export default rootReducer;