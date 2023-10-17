import React, { useState } from "react";
import { Product } from "../stores/cartSlice";

type ProductListProps = {
  products: Product[];
  onAddToCart: (product: Product) => void;
};

const ProductList = ({ products, onAddToCart }: ProductListProps) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.price.toString().includes(searchTerm.toLowerCase())
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
              onClick={() => onAddToCart(product)}
              className="cart-button"
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
