import React from "react";
//? React semantic UI Component
import { Header, Grid } from "semantic-ui-react";

const EmptyCart = () => {
  return (
    <div>
      <Grid textAlign="center" style={{ marginTop: "4rem" }}>
        <Grid.Column verticalAlign="middle">
          <Header
            color="red"
            content=" Your Cart is Empty"
            size="huge"
            style={{ fontSize: "4rem" }}
          />
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default EmptyCart;
