import React from 'react'
import productData from '../product'

// Get property from productdata
const description = productData.description;

// Product description component
const Description = () => {
    return (
        <span>{description}</span>
    )
}

export default Description