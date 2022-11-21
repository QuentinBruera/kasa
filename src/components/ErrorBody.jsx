import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import color from "../styles/color";
import { devices } from "../styles/mediaQueries";

const ErrorBody = () => {
    return (
        <ErrorSection>
            <ErrorH1>404</ErrorH1>
            <ErrorH2>
                Oups! La page que vous&nbsp;demandez n'existe&nbsp;pas.
            </ErrorH2>
            <ErrorLink to="/">Retourner sur la page d'accueil</ErrorLink>
        </ErrorSection>
    );
};

export default ErrorBody;

const ErrorSection = styled.section`
    text-align: center;
    display: flex;
    flex-direction: column;
    margin-bottom: 156px;
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
    margin-top: 126px;
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
        margin: auto;
        width: 260px;
        font-size: 18px;
    }
`;

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
