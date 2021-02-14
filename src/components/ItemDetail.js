import React from 'react'

function ItemDetail({ item, cart, addToCart }) {
    
    return (
        <fieldset className ="rarity item-box" style={{backgroundImage: `url(${item.background})`}}>
            {item.media.length >=1 ? <video width="30%" height="30%" controls autoplay loop><source src={item.media[0].src} type="video/mp4" autoplay/></video> : ""}
            <legend className="item-heading"><h1>{item.name}</h1></legend>
            <img className='detail-img' src={item.images.background} alt={item.name}/>
            <div className="item-detail-text">
                <h2>{item.description}</h2>
                <h2>{item.type}</h2>
                <h2>$ {item.cost}</h2>
                <h2>Average Stars: {item.ratings.avgStars} Total Points: {item.ratings.totalPoints} Votes: {item.ratings.numberVotes}</h2>            
                {item.cost === 0 || cart.some(c => c.id === item.id) ? "" : <button className="title-icon" onClick={(e) => addToCart(item)}>Add To Cart</button>}
            </div>
        </fieldset>
    )
}

export default ItemDetail
