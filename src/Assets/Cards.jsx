import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Cards = () => {
    var [products,setProducts] = useState([]);
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then((response)=>{
            console.log(response)
            setProducts(response.data)
        })
        .catch((error)=>{
            console.log(error);
        })

    },[])

  return (
    <div>
        <Grid container spacing={2}>
            {products.map((val,i)=>{
                return(
                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image={val.image}
                                title={val.title}
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {val.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Category:{val.category} &nbsp;
                                Rating : {val.rating.rate}({val.rating.count})
                            </Typography>
                            </CardContent>
                         </Card>
            
                    </Grid>
                )
                })}
        </Grid>

    </div>
  )
}

export default Cards