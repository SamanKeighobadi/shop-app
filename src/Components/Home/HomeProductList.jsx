import React from "react";
//? Import Custom hook
import useProducts from "../customHooks/useProducts";
//? Import Custom Components
import AppLoading from "../common/AppLoading";
import { Grid, Container } from "semantic-ui-react";
import ProductCard from "../Shop/ProductCard";

const HomeProductList = ({ addToCart }) => {
  const { data: products, loading } = useProducts(
    "https://fakestoreapi.com/products"
  );
  console.log(products);

  return (
    <div>
      <Container>
        {loading ? (
          <AppLoading />
        ) : (
          <>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                padding: "4rem",
              }}
            >
              <h2>Product List</h2>
              <p style={{ width: "380px" }}>
                Laboris aliquip eu irure culpa laborum deserunt exercitation
                consequat amet dolor. Laboris aliquip eu irure culpa laborum
                deserunt exercitation consequat amet dolor.
              </p>
            </div>
            <Grid verticalAlign={"middle"} centered>
              {products.slice(0, 8).map((product, index) => (
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
          </>
        )}
      </Container>
    </div>
  );
};

export default HomeProductList;
