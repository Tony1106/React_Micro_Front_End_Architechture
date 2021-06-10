import { MProduct } from "../";

export interface IStore {
  productList: MProduct[];
  addProduct: (product: MProduct) => void;
  cart: MProduct[];
  addToCart: (product: MProduct) => void;
  removeFromCart: (id: string) => void;
}
