const initialState = { cart: [], orders: [], requesting: false}
const manageCartAndOrdersReducer = (state = initialState , action) => {
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

        case 'RESET':
            return initialState

        default:
            return state
    }
}

export default manageCartAndOrdersReducer;