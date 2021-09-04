import React from "react";
import { Grid } from "semantic-ui-react";
import AppCard from "./AppCard";

const AppCards = ({ products }) => {
  return (
    <div>
      <Grid>
        {products.map((product,index) => (
          <div key={index}>
            <AppCard
              title={product.title}
              image={product.image}
              price={product.price}
              category={product.category}
            />
          </div>
        ))}
      </Grid>
    </div>
  );
};

export default AppCards;
