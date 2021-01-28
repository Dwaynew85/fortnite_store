export default (state = { cart: []}, action) => {
    switch (action.type) {

    case "ADD_TO_CART":
        return { ...state.cart, /* info to be added to state's cart */ };

    case "REMOVE_FROM_CART":
        return {}

    default:
        return state
    }
}
