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

    return (
        <div>
            <h1>Item</h1>
        </div>
    )
}

export default Show
