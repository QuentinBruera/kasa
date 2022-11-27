import React from "react";

// Importation du logo blanc
import WhiteLogo from "../assets/Logo-blanc.svg";

// Importation de styled-components
import styled from "styled-components";

// Importation de mon objet pour les couleurs
import color from "../styles/color";

// Importation de mon objet pour les mediaQueries
import { devices } from "../styles/mediaQueries";

const Footer = () => {
    return (
        <FooterContainer>
            <FooterLogo src={WhiteLogo} alt="Logo de Kasa" />
            <FooterText> © 2020 Kasa. All rights reserved</FooterText>
        </FooterContainer>
    );
};

export default Footer;

const FooterContainer = styled.footer`
    height: 209px;
    background-color: ${color.black};
    display: flex;
    flex-direction: column;
    align-items: center;
    @media ${devices.tablet} {
        width: 100%;
    }
`;

const FooterLogo = styled.img`
    width: 122px;
    height: 39px;
    margin-top: 62px;
`;

const FooterText = styled.p`
    margin-top: 45px;
    font-size: 24px;
    color: ${color.white};
    @media ${devices.bodyScale} {
        font-size: 20px;
    }
    @media ${devices.tablet} {
        font-size: 18px;
    }
    @media ${devices.mobileL} {
        height: 209px;
        margin-top: 30px;
        font-size: 12px;
    }
`;
