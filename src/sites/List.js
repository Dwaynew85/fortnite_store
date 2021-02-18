import React, {useState, useEffect} from 'react';
import Item from '../components/Item';
import { useLocation } from 'react-router-dom';
import { addIdToItem } from '../actions/index';
import '../styles/Item.css';

function List() {
    let location = useLocation();
    console.log(location.pathname)
    useEffect(() => {
        const fetchList = async () => {
            const data = await fetch(`https://fortnite-api.theapinetwork.com${location.pathname}/get`)
            const shoppingList = await data.json();
            setShopLists(shoppingList.data);
        }
        fetchList();
    }, [location])

    const [lists, setShopLists] = useState([])
    const [sort, setSort] = useState(false)
    
    const shoppingList = lists.map(list => (
        <Item key={list.itemId} item={addIdToItem(list.item, list.itemId)} cost={list.item.cost ? 0 : list.store.cost} />
    ))

    const sortByCost = (lists) => {
        const sortedLists = lists.sort(function (a, b) {
            return a.store.cost - b.store.cost
        })
        return sortedLists.map(list => (
            <Item key={list.itemId} item={addIdToItem(list.item, list.itemId)} cost={list.item.cost ? 0 : list.store.cost} />
        )) 
    }
    
    return (
        <div className="itemDiv">
            {location.pathname === "/store" ? <button className="sort-btn title-icon"onClick={(e) => setSort(!sort)}>Sort By Cost</button> : ""}
            {sort ? sortByCost(lists) : shoppingList}
        </div>
    )
}

export default List