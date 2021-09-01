import React from "react";
import { Container ,Header} from "semantic-ui-react";
import ProductCards from "./ProductCards";

const AppShopPage = () => {

  return (
    <Container textAlign='center'>
      <Header size='huge' as='h1' >Products</Header>
      <ProductCards />
    </Container>
  );
};

export default AppShopPage;
