import React from 'react';
import '../styles/Item.css';
import { Link } from 'react-router-dom';

function Item(props) {
    const {item, cost} = props
    return (
        <div className="itemBox">
            <fieldset className ="rarity" style={{backgroundImage: `url(${item.background})`}}>
                <legend><Link to={`/item/${item.id}`}><h1>{item.name}</h1></Link></legend> 
                <h2>${cost}</h2>
                <h3>{item.description ? item.description : item.name}</h3>
                <img src={item.images.icon} alt={item.costmeticId} />
            </fieldset>
        </div>
    )
}

export default Item