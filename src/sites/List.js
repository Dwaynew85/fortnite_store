import React, {useState, useEffect} from 'react';
import Item from '../components/Item'
import { useLocation } from 'react-router-dom'
import { addIdToItem } from '../actions/index'

function List(props) {
    let location = useLocation();
    
    useEffect(() => {
        const fetchList = async () => {
            const data = await fetch(`https://fortnite-api.theapinetwork.com${location.pathname}/get`)
            const shoppingList = await data.json();
            setShopLists(shoppingList.data);
        }
        fetchList();
    }, [location])

    const [lists, setShopLists] = useState([])
    
    const shoppingList = lists.map(list => (
        <Item key={list.itemId} item={addIdToItem(list.item, list.itemId)} cost={list.item.cost ? 0 : list.store.cost} addToCart={props.addToCart} />
    ))

    return (
        <div>
            <h1>Shop Here</h1>
            {shoppingList}
        </div>
    )
}

export default List