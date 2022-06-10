import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./main.css";


const queryClient = new QueryClient();
const root = document.getElementById("root");
if (!root) throw new Error("Failed to find the root element");
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
