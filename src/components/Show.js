import React, {useState, useEffect} from 'react';
import ItemDetail from './ItemDetail'

function ShowItem({ match }) {
    useEffect(() => {
        const fetchItem = async () => {
            const fetchItem = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`)
            const data = await fetchItem.json();
            setItem(data.data.item)
        };
        fetchItem();
    }, [])

    const [item, setItem] = useState({});
    
    return (
        <div>
            {item.name ? <ItemDetail item={item} /> : <h3>Loading...</h3> }
        </div>
    )
}

export default ShowItem