import React,{useState} from "react";
import { Button, Icon } from "semantic-ui-react";

const ProductCardButton = ({product}) => {

  const [cart,setCart] = useState([])

  const addToCart = (product) => {
    setCart([...cart,product])
    console.log('product added to cart')
    console.log(product)
  }

  return (
    <div>
      <Button  onClick={() => addToCart(product)} animated color="violet" floated="right" size="mini">
        <Button.Content visible>Add To Cart</Button.Content>
        <Button.Content hidden>
          <Icon name="cart plus" />
        </Button.Content>
      </Button>
    </div>
  );
};

export default ProductCardButton;
