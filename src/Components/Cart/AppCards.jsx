import React from "react";
//? React Semantic UI components
import { Grid } from "semantic-ui-react";
//? Custom Component
import AppCard from "./AppCard";
//? Prop Types
import PropTypes from 'prop-types'

const AppCards = ({ products, removeProduct }) => {
  return (
    <div>
      <Grid verticalAlign={"middle"} centered>
        {products.map((product, index) => (
          <Grid.Column computer={4} tablet={8} mobile={16} key={index}>
            <AppCard
              title={product.title}
              image={product.image}
              price={product.price}
              product={product}
              totalProduct={products}
              product_id={product.id}
              category={product.category}
              removeProduct={removeProduct}
            />
          </Grid.Column>
        ))}
      </Grid>
    </div>
  );
};

AppCards.propTypes = {
  products:PropTypes.array,
  removeProduct:PropTypes.func
}

export default AppCards;
