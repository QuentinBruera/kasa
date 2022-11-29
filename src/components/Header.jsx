import React from "react";

// Imporation de NavLink pour gérer les liens dans l'application
import { NavLink } from "react-router-dom";

// Importation du logo rouge
import RedLogo from "../assets/Logo-rouge.svg";

const Header = () => {
    return (
        <header className="header">
            <img className="header__logo" src={RedLogo} alt="Logo de Kasa" />
            <nav>
                <ul className="header__ul">
                    <NavLink className="header__ul__anchor" to="/">
                        <li className="header__ul__anchor__li">Accueil</li>
                    </NavLink>
                    <NavLink to="/a-propos">
                        <li className="header__ul__anchor__li">A Propos</li>
                    </NavLink>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
