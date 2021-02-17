import React from 'react'

export default function OrderItems({user, items, total, created}) {
    
    const itemLi = items.map(item => {
        return (
            <li className="list-left">
                <img className="item-icon" src={item.icon} alt={item.name}></img>
                <h6>{item.name}</h6>
                <h6>{item.cost}</h6>
            </li>
        )
    })
    
    return (
        <div className="history-item">
            <h6>Order placed: {created}</h6>
            <h2 className="history-item-child">Name: {user.first_name} {user.last_name}</h2>
            <h3 className="history-item-child">Email: {user.email}</h3>
            <h4 className="history-item-child">Shipped to: {user.address}</h4>
            <ul className="history-item-child">
                {itemLi}
            </ul>
            <h4 className="history-item-child">Order total: {total}</h4>
        </div>
    )
}
