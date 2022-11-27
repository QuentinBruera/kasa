import React from "react";
import ReactDOM from "react-dom/client";

// Imporation du style
import "./styles/Style.css";

// Importation du fichier App
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
