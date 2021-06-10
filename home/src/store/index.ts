import create, { SetState, GetState } from "zustand";
import { MProduct, IStore } from "shared_library";

export const useStore = create<IStore>((set: SetState<IStore>, get: GetState<IStore>) => ({
  productList: [],
  addProduct: (product): void => {
    const { productList } = get();
    set({ productList: [...productList, product] });
  },
  cart: [],
  addToCart: (product) => {
    const { cart } = get();
    const isProductInCart = cart.find((i) => i.id == product.id);
    if (isProductInCart) isProductInCart.quantity++;
    else set({ cart: [...cart, product] });
  },
  removeFromCart: (id) => {
    const { cart } = get();
    set({ cart: [...cart].filter((pro) => pro.id !== id) });
  },
}));
