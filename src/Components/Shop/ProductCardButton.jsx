import React from "react";
import { Button, Icon } from "semantic-ui-react";

const ProductCardButton = () => {
  return (
    <div>
      <Button animated color="violet" floated="right" size="mini">
        <Button.Content visible>Add To Cart</Button.Content>
        <Button.Content hidden>
          <Icon name="cart arrow down" />
        </Button.Content>
      </Button>
    </div>
  );
};

export default ProductCardButton;
