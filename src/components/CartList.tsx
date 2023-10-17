import { removeFromCart, updateCartItem, Product } from "../stores/cartSlice";
import { useDispatch } from "react-redux";

import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import React from "react";

type CartListProps = {
  cartItems: Product[];
};

const CartList = ({ cartItems }: CartListProps) => {
  const dispatch = useDispatch();

  return (
    <div className="cart-list-container">
      <h2>Cart</h2>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item: Product) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>${item.price}</td>
              <td>
                <FormControl
                  type="number"
                  value={item.quantity || 1}
                  onChange={(e) =>
                    dispatch(
                      updateCartItem({ id: item.id, quantity: +e.target.value })
                    )
                  }
                />
              </td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Remove
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CartList;
