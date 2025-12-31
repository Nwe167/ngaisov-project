import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "flowbite";
import { ProductProvider } from "./context/ProductContext.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  // 1. StrictMode
  // 2. Router
  // From 3. Provider
  <StrictMode>
    <BrowserRouter>
     <ProductProvider>
      <App />
    </ProductProvider>
    </BrowserRouter>
  </StrictMode>
);
