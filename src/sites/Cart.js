import React from 'react'
import CartLi from '../components/CartLi'

function Cart(props) {

    const cartLists = props.cart.map(list => (
        <CartLi key={list.id} item={list} delete={props.delete} />
    ))

    const totalCost = props.cart.length === 0 ? 0 : props.cart.map(item => item.cost).reduce(function(acc, cur) {
        return acc + cur;
    });

    //Need function to add cart items to state as order 

    // Function required to send state to backend API
    

    return (
        <div>
            <form>
                <label>First Name: </label>
                <input type="firstName" name="firstName"/>
                <label>Last Name: </label>
                <input type="lastName" name="lastName"/>
                <br/>
                <label>Address: </label>
                <input type="address" name="address" placeholder="Enter Full Address"/>
                <br/>
                <label>-Card Info Would Go Here-</label>
            </form>
            <ul>
                {cartLists}
            </ul>
            <h3>Total: ${totalCost}</h3> 
        </div>
    )
}

export default Cart
