import React from 'react'

export default function OrderItems({user, items, total, created}) {
    
    const itemLi = items.map(item => {
        return (
            <li className="list-left">
                <img className="item-icon" src={item.icon} alt={item.name}></img>
                <h2>{item.name}</h2>
                <h4>{item.cost}</h4>
            </li>
        )
    })
    
    return (
        <div className="history-item">
            <h6>Order placed: {created}</h6>
            <h2>Name: {user.first_name} {user.last_name}</h2>
            <h3>Email: {user.email}</h3>
            <h4>Shipped to: {user.address}</h4>
            <ul>
                {itemLi}
            </ul>
            <h4 className="total-right">Order total: {total}</h4>
        </div>
    )
}
