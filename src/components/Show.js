import React, {useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

function Show(props) {
    let params = useParams();
    const [item, setItem] = useState({});

    useEffect(() => {
        const fetchItem = async () => {
            const fetchItem = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${params.id}`)
            const data = await fetchItem.json();
            setItem(data.data.item)
        };
        fetchItem();
    }, [])

    
    return (
        <div>
            {item.name ? <ItemDetail item={item} addToCart={props.addToCart} /> : <h3>Loading...</h3> }
        </div>
    )
}

export default Show