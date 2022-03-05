import React from "react";
//? Import Custom hook
import useProducts from "../customHooks/useProducts";
//? Import Custom Components
import AppLoading from "../common/AppLoading";
import ProductCard from "./ProductCard";
//? Prop Types 
import PropTypes from 'prop-types'

import { Grid } from "semantic-ui-react";

const ProductCards = ({addToCart}) => {
  
  const { data: products, loading } = useProducts(
    "https://fakestoreapi.com/products"
  );
  console.log(products);

  return (
    <div>
      {loading ? (
        <AppLoading />
      ) : (
        <Grid verticalAlign={"middle"} centered>
          {products.map((product, index) => (
            <Grid.Column computer={4} tablet={8} mobile={16} key={index}>
              <ProductCard
                title={product.title}
                image={product.image}
                category={product.category}
                price={product.price}
                product={product}
                product_id={product.id}
                addToCart={() => addToCart(product)}
              />
            </Grid.Column>
          ))}
        </Grid>
      )}
    </div>
  );
};

ProductCards.propTypes = {
  addToCart:PropTypes.func
}

export default ProductCards;
