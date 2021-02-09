// function to send POST request to add order to backend. to be run when order is submitted.
export const submitOrder = async (order) => {
    const settings = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            "Content-type": "application/json;charset=UTF-8"
        },
        body: JSON.stringify(order)
    };
    try {
        const fetchOrder = await fetch('http://localhost:3001/orders', settings);
        const data = await fetchOrder.json();
        console.log(data);
    } catch (e) {
        return e;
    }
    
}

export const fetchOrders = () => {
    return async (dispatch) => {
        dispatch({ type: 'START_ADDING_ORDERS_REQUEST'});        
        fetch('http://localhost:3001/orders')
            .then(response => response.json())
            .then(orders => dispatch({ type: 'ADD_ORDERS', orders }));      
    };
}
