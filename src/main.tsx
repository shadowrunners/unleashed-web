import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "./App";
import "./index.css";
import React from "react";

createRoot(document.getElementById("root")!)?.render(
  <StrictMode>
    <App />
  </StrictMode>
);
