import React, {useState, useEffect} from 'react';
import Item from '../components/Item'

function List({ match }) {

    useEffect(() => {
        fetchList()
    }, []) // will not update when different site is clicked   

    const [lists, setShopLists] = useState([])

    const fetchList = async () => {
        const data = await fetch(`https://fortnite-api.theapinetwork.com${match.url}/get`)
        const shoppingList = await data.json();
        console.log(lists)
        setShopLists(shoppingList.data);
    }

    const shoppingList = lists.map(list => (
        <Item key={list.listId} item={list} />
    ))

    return (
        <div>
            <h1>Shop Here</h1>
            {shoppingList}
        </div>
    )
}

export default List
