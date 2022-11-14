import React from "react";

const Header = () => {
    return (
        <header className="header">
            <img
                className="header__logo"
                src="./assets/Logo-rouge.svg"
                alt="Logo de Kasa"
            />
            <nav className="header__nav">
                <ul className="header__nav__ul">
                    <li className="header__nav__ul__li">
                        <a
                            className="header__nav__ul__li__a"
                            href="http://localhost:3000/"
                        >
                            Accueil
                        </a>
                    </li>
                    <li className="header__nav__ul__li">
                        <a
                            className="header__nav__ul__li__a"
                            href="http://localhost:3000/propos"
                        >
                            A Propos
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
