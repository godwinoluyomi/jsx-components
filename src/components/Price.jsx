import React from 'react'
import productData from '../product'

// Get property from productdata
const price = productData.price;

// Product price component
const Price = () => {
    return (
        <div>{price}</div>
    )
}

export default Price