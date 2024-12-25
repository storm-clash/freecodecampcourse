import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Components/HeaderComponent/Header.jsx";
import Main from "./Components/Main/Main.jsx";
import { infoArray } from "./data";
import Chef from "./Components/ChefApp/Chef.jsx";
import AppRoutes from "./AppRoutes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <AppRoutes />
    </Router>
  </StrictMode>
);
