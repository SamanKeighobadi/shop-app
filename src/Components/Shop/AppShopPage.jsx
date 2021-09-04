import React from "react";
import { Container } from "semantic-ui-react";
import HeaderShopPage from "./HeaderShopPage";
import ProductCards from "./ProductCards";

const AppShopPage = ({addToCart}) => {

  return (
    <Container textAlign='center'>
      <HeaderShopPage />
      <ProductCards addToCart={addToCart} />
    </Container>
  );
};

export default AppShopPage;
