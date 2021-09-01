import React from "react";
import useProducts from "../customHooks/useProducts";
import ProductCard from "./ProductCard";

const ProductCards = () => {
  const { data: products } = useProducts("https://fakestoreapi.com/products");

  return (
    <div>
      {products.map((product, index) => (
        <ProductCard
          key={index}
          title={product.title}
          image={product.image}
          category={product.category}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default ProductCards;
