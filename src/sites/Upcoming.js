import React, {useState, useEffect} from 'react';
import Item from '../components/Item'

function Upcoming({ match }) {

    useEffect(() => {
        fetchItems()
    },[])

    const [upcoming, setUpcoming] = useState([])

    const fetchItems = async () => {
        const data = await fetch("https://fortnite-api.theapinetwork.com/upcoming/get")
        const upcomingList = await data.json();
        setUpcoming(upcomingList.data);
    }

    const itemList = upcoming.map(item => (
        <Item key={item.itemId} item={item}/>
    ))
    return (
        <div>
            <h1>See What's Coming Soon!</h1>
            {itemList}
        </div>
    )
}

export default Upcoming
