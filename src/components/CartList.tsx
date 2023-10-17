import { removeFromCart, updateCartItem, Product } from "../stores/cartSlice";
import { useDispatch } from "react-redux";

import React from "react";

type CartListProps = {
  cartItems: Product[];
};

const CartList = ({ cartItems }: CartListProps) => {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item: Product) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => dispatch(removeFromCart(item.id))}>
              Remove
            </button>
            <input
              type="number"
              value={item.quantity || 1}
              onChange={(e) =>
                dispatch(
                  updateCartItem({ id: item.id, quantity: +e.target.value })
                )
              }
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartList;
