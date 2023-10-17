import { useDispatch, useSelector } from "react-redux";
import { Product, addToCart } from "../stores/cartSlice";

import React from "react";
import ProductList from "./ProductList";
import CartList from "./CartList";
import useFetchProducts from "../hooks/useFetchProducts";
import ErrorToast from "./ErrorToast";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(
    (state: { cart: { items: Product[] } }) => state.cart.items
  );
  const { products, error } = useFetchProducts();

  return (
    <div>
      {error && <ErrorToast errorMessage={error} onClose={() => false} />}

      <ProductList
        products={products}
        onAddToCart={(product) => dispatch(addToCart(product))}
      />
      <CartList cartItems={cartItems} />
    </div>
  );
};

export default Cart;
