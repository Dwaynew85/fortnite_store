import React, {useState, useEffect} from 'react'

function Show({ match }) {
    useEffect(() => {
        fetchItem();
    }, [])

    const [item, setItem] = useState({});

    const fetchItem = async () => {
        const fetchItem = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`)
        const data = await fetchItem.json();
        setItem(data.data.item)
    };
console.log(item)
    return (
        <div>
            <img src={item.images.icon} alt={item.name} />
            <h1>{item.name}</h1>
            <p>{item.type}</p>
            <h2>{item.description}</h2>
            <h3>${item.cost}</h3>
            <h4>Average Stars: {item.ratings.avgStars} TotalPoints: {item.ratings.totalPoints} Votes: {item.ratings.numberVotes}</h4>
        </div>
    )
}

export default Show
