import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { AuthProvider } from "./context/auth.jsx";
import { SearchProvider } from "./context/Search.jsx";
import { CartProvider } from "./context/Cart.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  
    <AuthProvider>
      <SearchProvider>
        <CartProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </CartProvider>
      </SearchProvider>
    </AuthProvider>
 
);
