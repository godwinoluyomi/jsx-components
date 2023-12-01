import React from 'react'
import productData from '../product'

// Get property from productdata by destructuring
const { name } = productData;

// Product name component
const Name = () => {
    return (
        <div>{name}</div>
    )
}

export default Name