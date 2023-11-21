import { FC } from "react"
import { IProduct } from '../../interfaces/products';
import { Grid, Card, CardActionArea, CardMedia, Box, Typography } from "@mui/material";

interface Props {
    product:IProduct;
}

export const ProductCard: FC<Props> = ({Product}) => {
    return (
    <Grid item xs={6} sm={4} key={product.slug}>
        <Card>
          <CardActionArea>
            <CardMedia
              component= 'img'
              image={`products/${product.images[1]}`}
              alt={product.title}
            />
          </CardActionArea>
        </Card>
        <Box sx={{met:1}} className='fadeIn'>
            <Typography fontWeight={700}>{product.title} </Typography>
            <Typography fontWeight={500}>{`$${product.price}`}</Typography>
        </Box>
      </Grid>

    )
}