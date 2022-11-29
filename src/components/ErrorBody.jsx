import React from "react";

// Imporation de NavLink pour gérer les liens dans l'application
import { NavLink } from "react-router-dom";

const ErrorBody = () => {
    return (
        <section className="errorBodyContainer">
            <h1 className="errorBodyContainer__h1">404</h1>
            <h2 className="errorBodyContainer__h2">
                {/* &nbsp; : sert à forcer les deux mots à ne pas être séparé par un changement de ligne */}
                Oups! La page que vous&nbsp;demandez n'existe&nbsp;pas.
            </h2>
            {/* <ErrorLink to="/">Retourner sur la page d'accueil</ErrorLink> */}
            <NavLink className="errorBodyContainer__anchor" to="/">
                <p className="errorBodyContainer__anchor__text">
                    Retourner sur la page d'accueil
                </p>
            </NavLink>
        </section>
    );
};

export default ErrorBody;
