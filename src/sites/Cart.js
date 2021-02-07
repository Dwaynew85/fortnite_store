import React from 'react'
import CartLi from '../components/CartLi'
import CartInput from '../components/CartInput'

function Cart({cart, deleteFromCart }) {

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
            <CartInput cart={orderItems()} total={totalCost}/>
            <ul>
                {cartLists}
            </ul>
            <h3>Total: ${totalCost}</h3> 
        </div>
    )
}

export default Cart
