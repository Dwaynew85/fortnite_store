import React from 'react'

function ItemDetail({ item, cart, addToCart }) {
    
    return (
        <fieldset className ="rarity" style={{backgroundImage: `url(${item.background})`}}>
            {item.media.length >=1 ? <video width="20%" height="20%" controls autoplay loop><source src={item.media[0].src} type="video/mp4" autoplay/></video> : ""}
            <legend><h1>{item.name}</h1></legend>
            <img className='detail-img' src={item.images.background} alt={item.name}/>
            <h2>{item.description}</h2>
            <p>{item.type}</p>
            <h3>${item.cost}</h3>
            <h4>Average Stars: {item.ratings.avgStars} TotalPoints: {item.ratings.totalPoints} Votes: {item.ratings.numberVotes}</h4>            
            {item.cost === 0 || cart.some(c => c.id === item.id) ? "" : <button onClick={(e) => addToCart(item)}>Add To Cart</button>}
        </fieldset>
    )
}

export default ItemDetail
