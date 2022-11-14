// Importation de react
import React from "react";

// Importation de la librairie pour les routes
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Imporation de ma data
import data from "./data/logements.json";

// Imporation du style fait par sass
import "./styles/index.scss";

// Importation des pages
import Error from "./pages/Error";
import Home from "./pages/Home";
import Logement from "./pages/Logement";
import Propos from "./pages/Propos";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home propsData={data} />} />
                <Route
                    path="/logement"
                    element={<Logement propsData={data} />}
                />
                <Route path="/a-propos" element={<Propos />} />
                {/* path="*" fonctionne si jamais l'url ne correspond à rien de déclaré au dessus */}
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
}

// Exportation de la fonction App
export default App;
