import React from "react";
import { Button, Icon } from "semantic-ui-react";

const ProductCardButton = ({ product,addToCart }) => {
  
  
  return (
    <div>
      <Button
        onClick={() => addToCart(product)}
        animated
        color="violet"
        floated="right"
        size="mini"
      >
        <Button.Content visible>Add To Cart</Button.Content>
        <Button.Content hidden>
          <Icon name="cart plus" />
        </Button.Content>
      </Button>
    </div>
  );
};

export default ProductCardButton;
