import React from "react";
import { Card, Image, Icon, Button, Label } from "semantic-ui-react";
import ProductCardButton from "./ProductCardButton";

const ProductCard = ({ title, image, price, category }) => {
  return (
    <div>
      <Card color="violet">
        <Image size="small" centered src={image} wrapped ui={true} />
        <Card.Content>
          <Card.Header> {title} </Card.Header>
          <Card.Meta>
            <span className="date">{category}</span>
          </Card.Meta>
          <Card.Description>
            Matthew is a musician living in Nashville.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Label floating color='red'>{price}</Label>
          <ProductCardButton />
        </Card.Content>
      </Card>
    </div>
  );
};

export default ProductCard;
