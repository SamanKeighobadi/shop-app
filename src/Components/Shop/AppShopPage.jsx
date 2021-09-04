import React from "react";
import { Container ,Header} from "semantic-ui-react";
import ProductCards from "./ProductCards";

const AppShopPage = ({addToCart}) => {

  return (
    <Container textAlign='center'>
      <Header content="Products" dividing  size='huge' textAlign='left'/>
      <ProductCards addToCart={addToCart} />
    </Container>
  );
};

export default AppShopPage;
