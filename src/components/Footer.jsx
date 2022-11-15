import React from "react";

import styled from "styled-components";
import color from "../styles/color";

const Footer = () => {
    return (
        <FooterContainer>
            <FooterLogo src="./assets/logo-blanc.svg" alt="" />
            <FooterText> © 2020 Kasa. All rights reserved</FooterText>
        </FooterContainer>
    );
};

export default Footer;

const FooterContainer = styled.footer`
    margin-top: 50px;
    height: 209px;
    background-color: ${color.black};
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const FooterLogo = styled.img`
    width: 122px;
    height: 39px;
    margin-top: 66px;
`;

const FooterText = styled.p`
    margin-top: 60px;
    color: ${color.white};
`;
