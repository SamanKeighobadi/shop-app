import React, { Suspense } from "react";
import { Link } from "react-router-dom";
//? Semantic UI Components
import { Grid, Container, Button } from "semantic-ui-react";
//? Import Custom hook
import useProducts from "../customHooks/useProducts";
//? Import Custom Components
const AppLoading = React.lazy(() => import("../common/AppLoading"));
const ProductCard = React.lazy(() => import("../Shop/ProductCard"));

const HomeProductList = ({ addToCart }) => {
  const { data: products, loading } = useProducts(
    "https://fakestoreapi.com/products"
  );
  console.log(products);

  return (
    <Suspense
      fallback={
        <div>
          <AppLoading />
        </div>
      }
    >
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
                <Link to='/shop'>
                  <Button color="violet" size="tiny">
                    more
                  </Button>
                </Link>
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
    </Suspense>
  );
};

export default HomeProductList;
