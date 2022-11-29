import React from "react";

// Importation du logo blanc
import WhiteLogo from "../assets/Logo-blanc.svg";

const Footer = () => {
    return (
        <footer className="footer">
            <img className="footer__logo" src={WhiteLogo} alt="Logo de Kasa" />
            <p className="footer__text"> © 2020 Kasa. All rights reserved</p>
        </footer>
    );
};

export default Footer;
