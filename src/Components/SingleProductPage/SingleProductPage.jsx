import React from "react";
//? Import React Router
import { useParams } from "react-router-dom";
//? Import Custom Hook
import useProducts from "../customHooks/useProducts";
//? Import custom components
import Loading from "../common/AppLoading";
import SingleProductDetails from "./SingleProductDetails";
//? React Semantci UI Components
import { Grid, Container, Header, Image } from "semantic-ui-react";

const SingleProductPage = () => {
  //* useParams hook
  const { productId } = useParams();
  //* Custom hook
  const { data: product, loading } = useProducts(
    `https://fakestoreapi.com/products/${productId}`
  );

  const { title, image, description, price, category } = product;

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <Container style={{ marginTop: "3rem" }}>
          <Grid columns={2} textAlign='center'>
            <Grid.Column computer={6} tablet={8} mobile={16}>
              <Header content={title} size='large' />
              <Image src={image} size={"large"}  />
            </Grid.Column>
            <Grid.Column computer={6} tablet={8} mobile={16}>
              <SingleProductDetails
                price={price}
                category={category}
                description={description}
              />
            </Grid.Column>
          </Grid>
        </Container>
      )}
    </div>
  );
};

export default SingleProductPage;
