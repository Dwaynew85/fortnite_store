import React from 'react'
import CartLi from '../components/CartLi'
import CartInput from '../components/CartInput'
import '../styles/Cart.css'

function Cart({ cart, deleteFromCart, reset }) {
    const cartLists = cart.map(list => (
        <CartLi key={list.id} item={list} deleteFromCart={deleteFromCart} />
    ))

    const totalCost = cart.length === 0 ? 0 : cart.map(item => item.cost).reduce(function(acc, cur) {
        return acc + cur;
    });  
    
    const orderItems = () => {
        return (
            cart.map(item => (
                (({ name, cost, images: { icon }}) => ({ name, cost, icon}))(item)
            ))
           )            
    }
    
    return (
        <div>
            <CartInput cart={orderItems()} reset={reset} total={totalCost}/>
            <ul>
                {cartLists}
            </ul>
            <h2 className="total">Total: $ {totalCost}</h2> 
        </div>
    )
}

export default Cart
