import React from "react";
import { useState } from "react/cjs/react.development";
import { Card, Image, Label, Button, Icon } from "semantic-ui-react";

const AppCard = ({ title, image, price, category }) => {

    const [product ,setProduct ]  = useState([])

    const removeProductFromCart = (productInCart) => {
        setProduct(product.filter(product => product !== productInCart))
        console.log('Product Deleted from cart')
    }

  return (
    <div>
      <Card color="violet" centered>
        <Image size="small" centered src={image} />
        <Card.Content textAlign="right">
          <Card.Header content={title.slice(0, 15)} />
          <Card.Meta>
            <span> category: {category}</span>
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <Label content={price} floating color="red" />
          <Button
            color={"red"}
            size={"mini"}
            floated="right"
            content={<Icon name="trash" />}
            onClick={() =>removeProductFromCart(product) }
          />
        </Card.Content>
      </Card>
    </div>
  );
};

export default AppCard;
