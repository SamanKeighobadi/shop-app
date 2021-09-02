import React from "react";
import { Card, Image, Label } from "semantic-ui-react";
import ProductCardButton from "./ProductCardButton";

const ProductCard = ({ title, image, price, category }) => {
  return (
    <div>
      <Card color="violet" >
        <Image size="small" centered src={image} wrapped ui={true} />
        <Card.Content>
          <Card.Header > {title.slice(0,15)} </Card.Header>
          <Card.Meta>
            <span > category: {category}</span>
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <Label floating color='red'>{price}$</Label>
          <ProductCardButton />
        </Card.Content>
      </Card>
    </div>
  );
};

export default ProductCard;
