import React, {useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { addIdToItem } from '../actions/index'

function Show({ addToCart, cart }) {
    let params = useParams();
    const [item, setItem] = useState({});
    
    useEffect(() => {
        const fetchItem = async () => {
            const fetchItem = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${params.id}`)
            const data = await fetchItem.json();
            setItem(data.data.item)
        };
        fetchItem();
    }, [params.id])
    
    return (
        <div>
            {item.name ? <ItemDetail item={addIdToItem(item, params.id)} addToCart={addToCart} cart={cart}/> : <h3>Loading...</h3> }
        </div>
    )
}

export default Show