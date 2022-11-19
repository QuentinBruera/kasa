import React from "react";

import ArrowIcon from "../assets/arrow.svg";

import styled from "styled-components";
import color from "../styles/color";

const ProposBody = () => {
    return (
        <Container>
            <Details>
                <Summary>
                    <SummaryTitle>Fiabilité</SummaryTitle>
                    <SummaryIcon src={ArrowIcon} alt="Arrow Icon" />
                </Summary>
                <ContentCollapse>
                    Les annonces postées sur Kasa garantissent une fiabilité
                    totale. Les photos sont conformes aux logements, et toutes
                    les informations sont régulièrement vérifiées par nos
                    équipes.
                </ContentCollapse>
            </Details>
            <Details>
                <Summary>
                    <SummaryTitle>Respect</SummaryTitle>
                    <SummaryIcon src={ArrowIcon} alt="Arrow Icon" />
                </Summary>
                <ContentCollapse>
                    La bienveillance fait partie des valeurs fondatrices de
                    Kasa. Tout comportement discriminatoire ou de perturbation
                    du voisinage entraînera une exclusion de notre plateforme.
                </ContentCollapse>
            </Details>
            <Details>
                <Summary>
                    <SummaryTitle>Service</SummaryTitle>
                    <SummaryIcon src={ArrowIcon} alt="Arrow Icon" />
                </Summary>
                <ContentCollapse>
                    Nos équipes se tiennent à votre disposition pour vous
                    fournir une expérience parfaite. N'hésitez pas à nous
                    contacter si vous avez la moindre question.
                </ContentCollapse>
            </Details>
            <Details>
                <Summary>
                    <SummaryTitle>Sécurité</SummaryTitle>
                    <SummaryIcon src={ArrowIcon} alt="Arrow Icon" />
                </Summary>
                <ContentCollapse>
                    La sécurité est la priorité de Kasa. Aussi bien pour nos
                    hôtes que pour les voyageurs, chaque logement correspond aux
                    critères de sécurité établis par nos services. En laissant
                    une note aussi bien à l'hôte qu'au locataire, cela permet à
                    nos équipes de vérifier que les standards sont bien
                    respectés. Nous organisons également des ateliers sur la
                    sécurité domestique pour nos hôtes.
                </ContentCollapse>
            </Details>
        </Container>
    );
};

export default ProposBody;

const Container = styled.section`
    margin-bottom: 201px;
`;

const Details = styled.details`
    cursor: default;
    margin-top: 31px;
`;

const Summary = styled.summary`
    width: 1023px;
    height: 47px;
    font-size: 24px;
    border-radius: 5px;
    margin: auto;
    position: relative;
    cursor: pointer;
    display: flex;
    user-select: none;
    list-style: none;
    justify-content: space-between;
    background-color: #ff6060;
    color: ${color.white};
`;

const SummaryTitle = styled.p`
    margin: auto auto auto 18px;
`;

const SummaryIcon = styled.img`
    size: 20px;
    margin: auto 32.6px auto auto;
    ${Details}[open] & {
        transform: rotate(180deg);
    }
`;

const ContentCollapse = styled.p`
    margin: auto;
    height: auto;
    background-color: #f7f7f7;
    border-radius: 0 0 5px 5px;
    margin-top: -10px;
    width: 1023px;
    padding: 36px 27px 18px 18px;
    font-size: 24px;
    font-weight: 400;
    color: ${color.primary};
`;
