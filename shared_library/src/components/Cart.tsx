import React from "react";
import "./Cart.css";
import { Product } from "../models";
import Button from "./Button";
type IProps = {
  onRemove: (id: string) => void;
  products: Product[];
};
export default (props: IProps) => {
  const { products, onRemove } = props;
  return (
    <div className="cart-wrapper">
      <div className="cart-total">Number of product: {products.length}</div>
      <ul>
        {products.map((product) => (
          <li className="cart-product">
            <div className="productName"> {product.name}</div>
            <div className="productQuantity">Quantity: {product.quantity}</div>
            <div className="productPrice">Price: {product.price}</div>
            <div className="productTotal">Total: {product.total}</div>
            <Button onClick={() => onRemove(product.id)}>Remove Item</Button>
          </li>
        ))}
      </ul>
    </div>
  );
};
