import React from "react";
//? React Semantic UI Components
import { Container, Header } from "semantic-ui-react";
//? Import React Helmet
import {Helmet} from 'react-helmet'

import ProductCards from "./ProductCards";

const AppShopPage = ({ addToCart }) => {
  return (
    <>
    <Helmet>
      <title>Shop App | Products</title>
    </Helmet>
      <Container textAlign="center">
        <Header
          content="Our Products"
          size="huge"
          textAlign="left"
          style={{ padding: "1.25rem 0" }}
        />
        <ProductCards addToCart={addToCart} />
      </Container>
    </>
  );
};

export default AppShopPage;
