import {
  addToCart,
  removeFromCart,
  updateCartItem,
  Product,
} from "../stores/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

import React from "react";

const fetchProducts = async () => {
  // Simulate fetching products from a backend (in this case, reading from a local JSON file)
  try {
    const response = await fetch("/products.json");
    const products = await response.json();
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

const Cart: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const dispatch = useDispatch();
  const cartItems = useSelector(
    (state: { cart: { items: Product[] } }) => state.cart.items
  );

  useEffect(() => {
    // Fetch products when the component mounts
    fetchProducts().then((fetchedProducts) => {
      setProducts(fetchedProducts);
    });
  }, []);

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
      product.price.toString().includes(searchTerm.toLocaleLowerCase())
  );

  return (
    <div>
      <h2>Products</h2>
      <input
        type="text"
        placeholder="Search by name or price"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id} className="cart-list">
            {product.name} - ${product.price}
            <button
              onClick={() => dispatch(addToCart(product))}
              className="cart-button"
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>

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

export default Cart;
