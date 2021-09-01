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
        <Grid textAlign="center">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              image={product.image}
              category={product.category}
              price={product.price}
            />
          ))}
        </Grid>
      )}
    </div>
  );
};

export default ProductCards;
