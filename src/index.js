
import "./styles/index.css";  // Import global styles
import "./styles/colors.css"; // Import color styles
import "./styles/utilities.css"; // Import utility styles
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
