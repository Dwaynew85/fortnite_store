export const addToCart = () => {
    return (dispatch) => {
        dispatch({type: 'ADD_TO_CART'})
    }
}

export const removeFromCart = () => {
    return (dispatch) => {
        dispatch({type: 'REMOVE_FROM_CART'})
    }
}