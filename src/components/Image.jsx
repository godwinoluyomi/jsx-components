import React from 'react'
import CardMedia from '@mui/material/CardMedia';
import productData from '../product'

// Get property from productdata by destructuring
const { image } = productData;

// Product image component
const Image = () => {
    return (
        <>
            <CardMedia
                component="img"
                alt="Image"
                height="auto"
                // Image from the variable as described above
                image={image}
                title="Image"
            />
        </>
    )
}

export default Image