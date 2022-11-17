import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import color from "../styles/color";

const ErrorBody = (props) => {
    return (
        <ErrorSection>
            <ErrorH1>404</ErrorH1>
            <ErrorH2>Oups! La page que vous demandez n'existe pas.</ErrorH2>
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
`;

const ErrorH1 = styled.h1`
    margin-top: 126px;
    font-size: 288px;
    font-weight: 700;
    color: ${color.primary};
`;

const ErrorH2 = styled.h2`
    margin-top: 25px;
    font-size: 36px;
    color: ${color.primary};
`;

const ErrorLink = styled(NavLink)`
    margin-top: 185px;
    text-decoration: underline;
    font-size: 18px;
    color: ${color.primary};
`;