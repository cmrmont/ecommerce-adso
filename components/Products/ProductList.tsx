import { FC } from "react"
import { IProduct } from '../../interfaces';
import { ProductCard } from "./ProductCard";
import { Grid } from "@mui/material";

interface Props {
    Products: IProduct[]
    
}

export const ProductList:FC<Props> = ({Products}) => {
    return (
        <Grid container spacing={4}>
            {
                Products.map (product => (
                    <ProductCard
                        key={product.slug}
                        product={product}
                    />
                ))
            }
        </Grid>
                    )
            }
