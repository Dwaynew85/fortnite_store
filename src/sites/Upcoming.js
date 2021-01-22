import React, {useState, useEffect} from 'react';
import Item from '../components/Item'

function Upcoming() {

    useEffect(() => {
        fetchItems()
    },[])

    const [items, setItems] = useState([])

    const fetchItems = async () => {
        const data = await fetch("https://fortnite-api.theapinetwork.com/upcoming/get")
        const list = await data.json();
        const items = list.data;
        console.log(items)
        setItems(items);
    }

    const itemList = items.map(item => (
        <Item key={item.itemId} item={item}/>
    ))

    return (
        <div>
            {itemList}
        </div>
    )
}

export default Upcoming
