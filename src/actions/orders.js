// function to send POST request to add order to backend. to be run when order is submitted.
export const submitOrder = (order) => {
    fetch ('http://localhost:3001/orders', {
        method: 'POST',
        headers: {"Content-type": "application/json;charset=UTF-8"},
        body: JSON.stringify(order)
    })
    .then(response => response.json())
    .then(json => console.log(json)/* What are we doing with the data we get back? */)
    .catch(err => console('Request Failed', err));
}

// function to send GET request for orders in backend. to be run when app mounts

// function to clear state after form is submitted 