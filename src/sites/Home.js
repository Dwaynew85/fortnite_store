import React, {useState, useEffect} from 'react';
import Item from '../components/Item'

function Upcoming() {

    useEffect(() => {
        fetchItems()
    },[])

    const [items, setShopItems] = useState([])

    const fetchItems = async () => {
        const data = await fetch("https://fortnite-api.theapinetwork.com/store/get")
        const shoppingList = await data.json();
        const shopItems = shoppingList.data;
        setShopItems(shopItems);
    }

    const shoppingList = items.map(item => (
        <Item key={item.itemId} item={item} cost={item.store.cost} />
    ))

    return (
        <div>
            {shoppingList}
        </div>
    )
}

export default Upcoming
