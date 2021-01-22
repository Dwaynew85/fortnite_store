import React from 'react'

function Item(props) {
    const {item} = props.item
    console.log(item)
    return (
        <div>
            <h1>{item.name}</h1>
        </div>
    )
}

export default Item