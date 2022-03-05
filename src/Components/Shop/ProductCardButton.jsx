import React from "react";
//? React Semantic UI Components
import { Button, Icon } from "semantic-ui-react";
//? Prop Types
import PropTypes from 'prop-types'

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

ProductCardButton.propTypes = {
  product:PropTypes.object,
  addToCart:PropTypes.func
}

export default ProductCardButton;
