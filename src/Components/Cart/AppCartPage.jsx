import React from "react";
//? React Semantic UI Components
import { Grid } from "semantic-ui-react";
//? Import Components
import TotalCart from "./TotalCart";
import AppCards from "./AppCards";

const AppCartPage = ({ productsInCart, removeProduct }) => {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <AppCards products={productsInCart} removeProduct={removeProduct} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <TotalCart totalProduct={productsInCart} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default AppCartPage;
