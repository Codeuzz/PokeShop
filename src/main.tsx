import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "@pages/App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "@molecules/Navbar.js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>
);
