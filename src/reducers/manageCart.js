const manageCart = (state = { cart: []}, action) => {
    switch (action.type) {
        
    case "ADD_TO_CART":
        console.log(action)
        return { cart: state.cart.concat() };
    case "REMOVE_FROM_CART":
        const cart = state.cart.filter(item => `${item.id}` !== action.id)
        return { cart }

    default:
        return state
    }
}

export default manageCart
