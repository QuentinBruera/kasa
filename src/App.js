// import logo from "./logo.svg";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Logement from "./pages/Logement";
import Propos from "./pages/Propos";
import "./styles/index.scss";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/logement" element={<Logement />} />
                <Route path="/propos" element={<Propos />} />
                {/* path="*" fonctionne si jamais l'url ne correspond à rien de déclaré au dessus */}
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
