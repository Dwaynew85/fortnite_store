import React from 'react'
import CartLi from '../components/CartLi'
import CartInput from '../components/CartInput'

function Cart(props) {

    const cartLists = props.cart.map(list => (
        <CartLi key={list.id} item={list} delete={props.delete} />
    ))

    const totalCost = props.cart.length === 0 ? 0 : props.cart.map(item => item.cost).reduce(function(acc, cur) {
        return acc + cur;
    });  

    return (
        <div>
            <CartInput cart={props.cart}/>
            <ul>
                {cartLists}
            </ul>
            <h3>Total: ${totalCost}</h3> 
        </div>
    )
}

export default Cart
