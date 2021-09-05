import React from "react";
import { Card, Image, Label } from "semantic-ui-react";
import { Link } from "react-router-dom";
import ProductCardButton from "./ProductCardButton";

const ProductCard = ({
  title,
  image,
  product_id,
  price,
  category,
  product,
  addToCart,
}) => {
  return (
    <Card raised color="violet" centered>
      <Link to={`/product/${product_id}`}>
        <Image size="small" centered src={image} />
      </Link>
      <Card.Content textAlign="right">
        <Card.Header content={title.slice(0, 15)} />
        <Card.Meta>
          <span> category: {category}</span>
        </Card.Meta>
      </Card.Content>

      <Card.Content extra>
        <Label content={price} floating color="red" />
        <ProductCardButton
          addToCart={() => addToCart(product)}
          product={product}
        />
      </Card.Content>
    </Card>
  );
};

export default ProductCard;
