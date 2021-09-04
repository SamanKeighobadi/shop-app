import React from "react";
import useProducts from "../customHooks/useProducts";
import ProductCard from "./ProductCard";
import { Grid } from "semantic-ui-react";
import AppLoading from "../common/AppLoading";

const ProductCards = () => {
  const { data: products, loading } = useProducts(
    "https://fakestoreapi.com/products"
  );

  return (
    <div>
      {loading ? (
        <AppLoading />
      ) : (
        <Grid verticalAlign={'middle'} centered>
          {products.map((product, index) => (
            <Grid.Column computer={4} tablet={8} mobile={16} key={index}>
              <ProductCard
                title={product.title}
                image={product.image}
                category={product.category}
                price={product.price}
                product={product}
              />
            </Grid.Column>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default ProductCards;
