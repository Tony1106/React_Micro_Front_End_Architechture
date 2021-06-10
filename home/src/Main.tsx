import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Cart from "./views/Cart";
import ProductList from "./views/ProductList";
export default function Body() {
  return (
    <div>
      <Switch>
        <Route path="/cart">
          <React.Suspense fallback={null}>
            <Cart />
          </React.Suspense>
        </Route>
        <Route path="/">
          <React.Suspense fallback={null}>
            <ProductList />
          </React.Suspense>
        </Route>
      </Switch>
    </div>
  );
}
