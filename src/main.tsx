import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "@pages/App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "@molecules/Navbar.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <App />
    </BrowserRouter>
  </StrictMode>
);
