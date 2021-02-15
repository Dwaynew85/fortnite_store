import React from 'react'

export default function CartLi({item, deleteFromCart}) {
    return (
        <li className="cart-items">
            <button className="delete" onClick={(e) => deleteFromCart(item)}>X</button>       
            <img src={item.images.icon} alt={item.costmeticId} className ="rarity cart-icon" style={{backgroundImage: `url(${item.background})`}} />
            <div className="cart-text">
                <h2>{item.name}</h2> 
                <h3>${item.cost}</h3>  
            </div>  
        </li>
    )
}
