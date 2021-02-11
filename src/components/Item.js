import React from 'react';
import { Link } from 'react-router-dom';

function Item({item, cost}) {
    return (
        <div className="itemBox">
            <Link to={`/item/${item.id}`}>
                <fieldset className ="rarity" style={{backgroundImage: `url(${item.background})`}}>
                    <legend className="title-icon"><h1>{item.name}</h1></legend> 
                    <img src={item.images.icon} alt={item.costmeticId} />
                    <h2>${cost}</h2>
                    <h3>{item.description ? item.description : item.name}</h3>
                </fieldset>
            </Link>
        </div>
    )
}

export default Item