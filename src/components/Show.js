import React, {useState, useEffect} from 'react'

function Show() {
    useEffect(() => {
        fetchItem();
    }, [])

    const [item, setSetitem] = useState({});

    const fetchItem = async () => {
        const fetchItem = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id={{itemid}}`)
        const item = await fetchItem.json
    };

    return (
        <div>
            <h1>Item</h1>
        </div>
    )
}

export default Show
