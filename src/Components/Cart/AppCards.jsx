import React from "react";
import { Grid } from "semantic-ui-react";
import AppCard from "./AppCard";

const AppCards = ({ products }) => {
  return (
    <div>
      <Grid verticalAlign={'middle'} centered>
        {products.map((product,index) => (
          <Grid.Column computer={4} tablet={8} mobile={16} key={index}>
            <AppCard
              title={product.title}
              image={product.image}
              price={product.price}
              category={product.category}
            />
          </Grid.Column>
        ))}
      </Grid>
    </div>
  );
};

export default AppCards;