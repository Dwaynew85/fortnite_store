import React from 'react';
import '../styles/Item.css';
import { Link } from 'react-router-dom';

function Item(props) {
    const {item, cost} = props
    
    return (
        <div className="itemBox">
            <fieldset>
                <legend><Link to={`/item/${item.id}`}><h1>{item.name}</h1></Link></legend> 
                <h2>{cost}</h2>
                <h3>{item.description ? item.description : item.name}</h3>
                <img src={item.images.icon} alt={item.costmeticId} />
                <button onClick={(e) => props.addToCart(item)}>From Item - Working. Update reducer</button>
            </fieldset>
        </div>
    )
}

export default Item