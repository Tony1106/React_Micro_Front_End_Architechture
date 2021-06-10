import React from "react";
import { useStore } from "../store";
import { withRouter } from "react-router-dom";
import { History } from "history";
const ProductList = React.lazy(() => import("view-product/ProductList"));
interface IProps {
  history: History;
}
function ProductListPage({ history }: IProps) {
  return <ProductList useStore={useStore} history={history} className="product-item" />;
}
export default withRouter(ProductListPage);
