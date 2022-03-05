import React from "react";
//? Import Custom hook
import useProducts from "../customHooks/useProducts";
//? Import Custom Components
import AppLoading from "../common/AppLoading";
import { Grid } from "semantic-ui-react";
import ProductCard from "../Shop/ProductCard";

const HomeProductList = ({addToCart}) => {
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
          {products.slice(0,8).map((product, index) => (
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

export default HomeProductList;
