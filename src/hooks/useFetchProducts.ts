import { useState, useEffect } from "react";
import { Product } from "../stores/cartSlice";

const useFetchProducts = (): Product[] => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/products.json");
        const fetchedProducts: Product[] = await response.json();
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return products;
};

export default useFetchProducts;
