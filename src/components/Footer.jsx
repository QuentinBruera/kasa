import React from "react";

import WhiteLogo from "../assets/Logo-blanc.svg";

import styled from "styled-components";
import color from "../styles/color";
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
    margin-top: 66px;
`;

const FooterText = styled.p`
    margin-top: 60px;
    font-size: 24px;
    color: ${color.white};
    @media ${devices.bodyScale} {
        font-size: 20px;
    }
    @media ${devices.tablet} {
        font-size: 18px;
    }
    @media ${devices.mobileL} {
        font-size: 12px;
    }
`;
