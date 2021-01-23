import React, {useState, useEffect} from 'react';
import Item from '../components/Item'

function Upcoming() {

    useEffect(() => {
        fetchItems()
    },[])

    const [upcoming, setUpcoming] = useState([])

    const fetchItems = async () => {
        const data = await fetch("https://fortnite-api.theapinetwork.com/upcoming/get")
        const upcomingList = await data.json();
        const upcoming = upcomingList.data;
        console.log(upcoming)
        setUpcoming(upcoming);
    }

    const itemList = upcoming.map(item => (
        <Item key={item.itemId} item={item}/>
    ))

    return (
        <div>
            {itemList}
        </div>
    )
}

export default Upcoming
