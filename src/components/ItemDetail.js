import React from 'react'

function ItemDetail({ item, cart, addToCart }) {
    console.log(item.media.length >=1 ? item.media[0].src : "no media")
    return (
        <fieldset className ="rarity" style={{backgroundImage: `url(${item.background})`}}>
            <legend><h1>{item.name}</h1></legend>
            <img src={item.images.background} alt={item.name}/>
            <h2>{item.description}</h2>
            <p>{item.type}</p>
            <h3>${item.cost}</h3>
            <h4>Average Stars: {item.ratings.avgStars} TotalPoints: {item.ratings.totalPoints} Votes: {item.ratings.numberVotes}</h4>
            {/* add video tag {item.media....} */}
            {item.cost === 0 || cart.includes(item) ? "" : <button onClick={(e) => addToCart(item)}>Add To Cart</button>}
        </fieldset>
    )
}

export default ItemDetail
