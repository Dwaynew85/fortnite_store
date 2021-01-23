import React from 'react';
import '../styles/Item.css';

function Item(props) {
    const {item} = props.item
    console.log(item)
    return (
        <div className="itemBox">
            <fieldset>
                <legend><h1>{item.name}</h1></legend>
                <h2>{item.cost}</h2>
                <h3>{item.description}</h3>
                <img src={item.images.icon} alt={item.series} />
            </fieldset>
        </div>
    )
}

export default Item