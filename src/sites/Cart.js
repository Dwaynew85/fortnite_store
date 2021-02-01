import React from 'react'
import CartLi from '../components/CartLi'

function Cart(props) {

    const cartLists = props.cart.map(list => (
        <CartLi key={list.id} item={list} delete={props.delete} />
    ))

    const totalCost = props.cart.map(item => item.cost).reduce(function(acc, cur) {
        return acc + cur;
    });
    

    return (
        <div>
            <form>
                <label>First Name: </label>
                <input type="text" name="firstName"></input>
                <label>Last Name: </label>
                <input type="text" name="lastName"></input>
            </form>
            <ul>
                {cartLists}
            </ul>
            <h3>Total: ${totalCost}</h3> {/* not working */}
        </div>
    )
}

export default Cart
