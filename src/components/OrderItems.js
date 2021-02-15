import React from 'react'

export default function OrderItems({user, items, total, created}) {
    
    const itemLi = items.map(item => {
        return (
            <li>
                <img className="item-icon" src={item.icon} alt={item.name}></img>
                <h6>{item.name}</h6>
                <h6>{item.cost}</h6>
            </li>
        )
    })
    
    return (
        <div>
            <h6>Order placed: {created}</h6>
            <h3>Name: {user.first_name} {user.last_name}</h3>
            <h4>Email: {user.email}</h4>
            <h5>Shipped to: {user.address}</h5>
            <ul>
                {itemLi}
            </ul>
            <h4>Order total: {total}</h4>
        </div>
    )
}
