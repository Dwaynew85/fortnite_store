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
    
    const orderItems = () => {
        return (
            props.cart.map(item => (
                (({ name, cost, images }) => ({ name, cost, images }))(item)
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
