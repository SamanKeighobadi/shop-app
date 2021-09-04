import React from "react";
import { Container, Header } from "semantic-ui-react";
import ProductCards from "./ProductCards";

const AppShopPage = ({ addToCart }) => {
  return (
    <Container textAlign="center">
      <Header
        content="Our Products"
        size="huge"
        textAlign="left"
        style={{ padding: "1.25rem 0" }} 
      />
      <ProductCards addToCart={addToCart} />
    </Container>
  );
};

export default AppShopPage;
