import React from "react";
//? React Semantic UI Components
import { Grid } from "semantic-ui-react";
//? Import Components
import TotalCart from "./TotalCart";
import AppCards from "./AppCards";
import EmptyCart from "./EmptyCart";
//? Prop Types 
import PropTypes from 'prop-types'

const AppCartPage = ({ productsInCart, removeProduct }) => {
  return (
    <div>
      {productsInCart.length === 0 ? (
        <EmptyCart />
      ) : (
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <AppCards
                products={productsInCart}
                removeProduct={removeProduct}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <TotalCart totalProduct={productsInCart} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      )}
    </div>
  );
};

AppCartPage.propTypes ={
  removeProduct:PropTypes.func,
  productsInCart:PropTypes.array
}

export default AppCartPage;
