import React from 'react'

export default function CartLi({item, deleteFromCart}) {
    return (
        <li>
            <img src={item.images.icon} alt={item.costmeticId} className ="rarity" style={{backgroundImage: `url(${item.background})`}} />
            <h2>{item.name}</h2> 
            <h3>${item.cost}</h3>    
            <button onClick={(e) => deleteFromCart(item)}>X</button>       
        </li>
    )
}
