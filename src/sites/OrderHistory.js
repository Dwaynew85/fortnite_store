import React, {useEffect} from 'react';
import OrderItems from '../components/OrderItems';
import '../styles/OrderHistory.css'

export default function OrderHistory({fetchOrders, orders}) {
    
    useEffect(() => {
        fetchOrders()
    }, [fetchOrders])

    const ordersList = orders.map(order => (
        <OrderItems key={order.id} user={order.user} items={order.items} total={order.total} created={order.created_at}/>
    ))

    return (
        <div>
            {orders ? ordersList : <h3>Loading...</h3>}
        </div>
    )
}
