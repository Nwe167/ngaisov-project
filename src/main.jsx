import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import "flowbite";

import App from "./App.jsx";
import { ProductProvider } from "./context/ProductContext.jsx";
import { ThemeProvider } from "./context/ThemeProvider.jsx"; // ✅

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider> {/* ✅ REQUIRED */}
        <ProductProvider>
          <App />
        </ProductProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
