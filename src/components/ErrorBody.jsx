import React from "react";

// Imporation de NavLink pour gérer les liens dans l'application
import { NavLink } from "react-router-dom";

// Importation de styled-components
import styled from "styled-components";

// Importation de mon objet pour les couleurs
import color from "../styles/color";

// Importation de mon objet pour les mediaQueries
import { devices } from "../styles/mediaQueries";

const ErrorBody = () => {
    return (
        <ErrorSection>
            <ErrorH1>404</ErrorH1>
            <ErrorH2>
                {/* &nbsp; : sert à forcer les deux mots à ne pas être séparé par un changement de ligne */}
                Oups! La page que vous&nbsp;demandez n'existe&nbsp;pas.
            </ErrorH2>
            <ErrorLink to="/">Retourner sur la page d'accueil</ErrorLink>
        </ErrorSection>
    );
};

export default ErrorBody;

const ErrorSection = styled.section`
    width: 1240px;
    text-align: center;
    display: flex;
    flex-direction: column;
    margin: 0 auto 156px auto;
    @media ${devices.bodyScale} {
        width: 90%;
        margin: auto;
        margin-bottom: 100px;
    }
    @media ${devices.tablet} {
        margin-bottom: 165px;
    }
    @media ${devices.mobileL} {
        margin-bottom: 235px;
    }
`;

const ErrorH1 = styled.h1`
    margin-top: 186px;
    font-size: 288px;
    font-weight: 700;
    color: ${color.primary};
    @media ${devices.bodyScale} {
        font-size: 185px;
    }
    @media ${devices.tablet} {
        font-size: 140px;
    }
    @media ${devices.mobileL} {
        font-size: 96px;
    }
`;

const ErrorH2 = styled.h2`
    margin-top: 25px;
    font-size: 36px;
    color: ${color.primary};
    @media ${devices.bodyScale} {
        font-size: 24px;
    }
    @media ${devices.tablet} {
        font-size: 21px;
    }
    @media ${devices.mobileL} {
        line-height: 27px;
        margin: 2px auto auto auto;
        width: 260px;
        font-size: 18px;
    }
`;

// Le NavLink est appelé avec styler-compenant
const ErrorLink = styled(NavLink)`
    margin-top: 185px;
    text-decoration: underline;
    font-size: 18px;
    color: ${color.primary};
    @media ${devices.bodyScale} {
        margin-top: 133px;
        font-size: 17px;
    }
    @media ${devices.tablet} {
        margin-top: 133px;
        font-size: 16px;
    }
    @media ${devices.mobileL} {
        font-size: 14px;
    }
`;
