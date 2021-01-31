import React from 'react'

function ItemDetail(props) {
    const { item, addToCart } = props
    
    return (
        <div>
            <img src={item.images.background} alt={item.name}/>
            <h1>{item.name}</h1>
            <p>{item.type}</p>
            <h2>{item.description}</h2>
            <h3>${item.cost}</h3>
            <h4>Average Stars: {item.ratings.avgStars} TotalPoints: {item.ratings.totalPoints} Votes: {item.ratings.numberVotes}</h4>
            {/* add video tag {item.media....} */}
            <button onClick={(e) => addToCart(item)}>ItemDetail Working</button>
        </div>
    )
}

export default ItemDetail
