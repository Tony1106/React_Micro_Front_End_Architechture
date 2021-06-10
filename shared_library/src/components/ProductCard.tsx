import React from "react";
import { Product } from "../models";
import Button from "../components/Button";
import { History } from "history";
import "./ProductCard.css";
type IProps = {
  product: Product;
  history: History;
  onAddToCart: (id: string) => void;
};
const ProductCard = (props: IProps) => {
  const { product, onAddToCart } = props;
  const ProductName = (
    <div className="productName">
      <div>
        <h1 className="big">{product.name}</h1>
        <div className="small">{product.id}</div>
      </div>
    </div>
  );

  const Description = (
    <div className="description">
      <h3 className="title">Product Info</h3>
      <p className="text">{product.description}</p>
    </div>
  );

  const BuySection = (
    <div className="buy-price">
      <Button onClick={() => onAddToCart(product.id)}>Add to cart</Button>

      <div className="price">
        <i className="fas fa-dollar-sign"></i>
        <h1 className={`${!!product.discount && "cross"}`}>{product.price}</h1>
        {product.discount && <h1>{product.priceAfterDiscount}</h1>}
      </div>
    </div>
  );

  return (
    <div className="info">
      {ProductName}
      {Description}
      {BuySection}
      <Button onClick={() => props.history.push("/cart")}>Go to Cart Page</Button>
    </div>
  );
};

export default ProductCard;
