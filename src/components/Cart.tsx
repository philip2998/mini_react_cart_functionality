import { useDispatch, useSelector } from "react-redux";
import { addToCart, Product } from "../stores/cartSlice";

import useFetchProducts from "../hooks/useFetchProducts";
import ProductList from "./ProductList";
import CartList from "./CartList";
import React from "react";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(
    (state: { cart: { items: Product[] } }) => state.cart.items
  );
  const products = useFetchProducts();

  return (
    <div>
      <ProductList
        products={products}
        onAddToCart={(product) => dispatch(addToCart(product))}
      />
      <CartList cartItems={cartItems} />
    </div>
  );
};

export default Cart;
