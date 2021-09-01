import React from "react";
import { Container } from "semantic-ui-react";
import ProductCards from "./ProductCards";

const AppShopPage = () => {
  return (
    <Container>
      <h1 className="">Products</h1>
      <ProductCards />
    </Container>
  );
};

export default AppShopPage;
