import React, { createContext, useState, useEffect } from "react";
import fetchAPI from "../utils/fetchApi";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [theme, setTheme] = useState("light"); // Add theme state

  // Fetch products on mount
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchAPI();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    loadProducts();
  }, []);

  // Toggle theme function
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Apply theme to document
  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <ProductContext.Provider value={{ 
      products, 
      setProducts, 
      theme, 
      toggleTheme 
    }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;