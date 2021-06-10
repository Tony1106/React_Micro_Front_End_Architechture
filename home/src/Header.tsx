import React from "react";
import { Link } from "react-router-dom";
import { useStore } from "./store";
export default function Header() {
  const { cart } = useStore();
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Add Product</Link>
        </li>
        <li className="header-cart">
          <div className="circle">{cart.length}</div>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </nav>
  );
}
