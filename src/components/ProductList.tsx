import React, { useState } from "react";
import { Product } from "../stores/cartSlice";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";

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
      <InputGroup className="mb-3">
        <FormControl
          type="text"
          placeholder="Search by name and price"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </InputGroup>
      <div className="row">
        {filteredProducts.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
                <Button onClick={() => onAddToCart(product)} variant="primary">
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
