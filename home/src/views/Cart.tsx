import React from "react";
import { MProduct, Cart } from "shared_library";
import { useStore } from "../store";
export default function CartPage() {
  const { cart, removeFromCart } = useStore();
  return (
    <div>
      <h1>List of product in cart</h1>
      <Cart products={cart} onRemove={(id) => removeFromCart(id)} />
    </div>
  );
}
