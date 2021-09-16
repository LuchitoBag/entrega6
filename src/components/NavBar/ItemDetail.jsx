import React from 'react'

const ItemDetail = ({item}) => {
    return (
        <div>
            <h1>{item.id}</h1>
            <h2>{item.name}</h2>
        </div>
    )
}

export default ItemDetail
