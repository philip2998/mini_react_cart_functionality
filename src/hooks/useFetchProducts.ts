import { useState, useEffect } from "react";
import { Product } from "../stores/cartSlice";

interface UseFetchProductsResult {
  products: Product[];
  error: string | null;
}

const useFetchProducts = (): UseFetchProductsResult => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/products.json");

        if (!response.ok) {
          throw new Error(`Failed to fetch products: ${response.status}`);
        }

        const allProducts: Product[] = await response.json();
        setProducts(allProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError("Error fetching products");
      }
    };

    fetchProducts();
  }, []);

  return { products, error };
};

export default useFetchProducts;
