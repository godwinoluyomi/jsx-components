import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from './Image';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import productData from '../product';


const CardBox = ({ firstName, submitted }) => {

    // useEffect(() => {

    // }, [firstName])


    return (
        <>
            <Card variant="outlined" className=' shadow-xl'>

                {/* Image Component */}
                {submitted && firstName !== '' && <Image />}

                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {/* Name Component */}
                        <Name />
                    </Typography>
                    <Typography gutterBottom variant="body" component="div">
                        {/* Price Component */}
                        <Price />
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {/* Description Componnent */}
                        <Description />
                    </Typography>
                </CardContent>
            </Card>

        </>
    )
}

export default CardBox