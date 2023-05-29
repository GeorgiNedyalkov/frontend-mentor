import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Country from "./pages/Country";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:id" element={<Country />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
