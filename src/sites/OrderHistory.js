import React, {useEffect} from 'react';
import OrderLi from '../components/OrderLi';
import '../styles/OrderHistory.css'

export default function OrderHistory({fetchOrders, orders}) {
    
    useEffect(() => {
        fetchOrders()
    }, [fetchOrders])

    const ordersList = orders.map(order => (
        <li><OrderLi key={order.id} user={order.user} items={order.items} total={order.total} /></li>
    ))

    return (
        <div>
            {ordersList}
        </div>
    )
}
