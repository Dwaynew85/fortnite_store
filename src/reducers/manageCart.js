const manageCart = (state = { cart: []}, action) => {    
    switch (action.type) {
        
    case "ADD_TO_CART":
        return { ...state,
            cart: [...state.cart, action.item] };
    case "DELETE_FROM_CART":
        const cart = state.cart.filter(item => `${item.id}` !== action.item.id)
        return { cart }

    default:
        return state
    }
}

export default manageCart
