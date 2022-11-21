import React from "react";

import ArrowIcon from "../assets/arrow.svg";

import styled from "styled-components";
import color from "../styles/color";
import { devices } from "../styles/mediaQueries";

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
    @media ${devices.bodyScale} {
        margin: 0 auto 90px auto;
        width: 90%;
    @media ${devices.tablet} {
        margin: 0 auto 130px auto;
        }
    @media ${devices.mobileL} {
        margin: 0 auto 50px auto;

        }
`;

const Details = styled.details`
    cursor: default;
    margin-top: 31px;
    @media ${devices.bodyScale} {
        margin-top: 28px;
    }
    @media ${devices.tablet} {
        margin-top: 25px;
    }
    @media ${devices.mobileL} {
        margin-top: 20px;
    }
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
    @media ${devices.bodyScale} {
        // margin: 44px auto 0 auto;
        width: 90%;
    }
    @media ${devices.tablet} {
        font-size: 21px;
        width: 95%;
    }
    @media ${devices.mobileL} {
        font-size: 13px;
        width: 100%;
    }
`;

const SummaryTitle = styled.p`
    margin: auto auto auto 18px;
    @media ${devices.bodyScale} {
    }
    @media ${devices.tablet} {
    }
    @media ${devices.mobileL} {
    }
`;

const SummaryIcon = styled.img`
    margin: auto 32.6px auto auto;
    ${Details}[open] & {
        transform: rotate(180deg);
    }
    @media ${devices.bodyScale} {
        margin-right: 20px;
    }
    @media ${devices.tablet} {
        margin-right: 15px;
    }
    @media ${devices.mobileL} {
        margin: 18px 10px 18px auto;
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
    @media ${devices.bodyScale} {
        font-size: 20px;

        width: 90%;
    }
    @media ${devices.tablet} {
        font-size: 16px;
        width: 95%;
    }
    @media ${devices.mobileL} {
        padding: 25px 6px 52px 11px;
        font-size: 12px;
        width: 100%;
    }
`;
