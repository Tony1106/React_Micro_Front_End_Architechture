import React from "react";
import ReactDOM from "react-dom";
import { Button, ProductCard, MProduct, IStore } from "shared_library";
import { mkProduct } from "./helpers";
import { History } from "history";
import "./ProductList.css";
export type IProps = {
  useStore: () => IStore;
  history: History;
};
export default (props: IProps) => {
  const { useStore } = props;
  const { addProduct, productList, addToCart } = useStore();
  return (
    <div>
      <Button onClick={() => addProduct(mkProduct())}>Add Product</Button>

      <h1>List of product</h1>
      <div className="product-list-wrapper">
        {productList.map((product) => (
          <ProductCard product={product} onAddToCart={() => addToCart(product)} history={props.history} />
        ))}
      </div>
    </div>
  );
};
