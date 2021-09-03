import React from "react";
import { Container ,Header} from "semantic-ui-react";
import ProductCards from "./ProductCards";

const AppShopPage = () => {

  return (
    <Container textAlign='center'>
      <Header  content="Products" dividing   size='huge'  as='h1' />
      <ProductCards />
    </Container>
  );
};

export default AppShopPage;
