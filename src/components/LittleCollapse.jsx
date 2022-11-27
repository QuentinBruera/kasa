import React from "react";

// Importation de l'icone flèche
import ArrowIcon from "../assets/arrow.svg";

// Importation de styled-components
import styled from "styled-components";

// Importation de mon objet pour les couleurs
import color from "../styles/color";

// Importation de mon objet pour les mediaQueries
import { devices } from "../styles/mediaQueries";

const LittleCollapse = ({ oneHousingData }) => {
    return (
        <Container>
            <Details>
                <Summary>
                    <SummaryTitle>Description</SummaryTitle>
                    <SummaryIcon src={ArrowIcon} alt="Arrow Icon" />
                </Summary>
                <LeftContentCollapse>
                    {oneHousingData.description}
                </LeftContentCollapse>
            </Details>
            <Details>
                <Summary>
                    <SummaryTitle>Équipements</SummaryTitle>
                    <SummaryIcon src={ArrowIcon} alt="Arrow Icon" />
                </Summary>
                <RightContainerContentCollapse>
                    {/* Affichage de la liste des équipements du collapse droit */}
                    {oneHousingData.equipments.map((data, index) => (
                        <RightContentCollapse key={data + index}>
                            {data}
                        </RightContentCollapse>
                    ))}
                </RightContainerContentCollapse>
            </Details>
        </Container>
    );
};

export default LittleCollapse;

const Container = styled.section`
    width: 1240px;
    margin: 24px auto 122px auto;
    display: flex;
    justify-content: space-between;
    @media ${devices.bodyScale} {
        width: 90%;
        margin-top: 0;
        margin-bottom: 100px;
    }
    @media ${devices.tablet} {
        flex-direction: column;
        margin-bottom: 165px;
    }
    @media ${devices.mobileL} {
        margin-top: -5px;
        margin-bottom: 235px;
    }
`;

const Details = styled.details`
    cursor: default;
    @media ${devices.bodyScale} {
        margin: 24px 0 0 0;
        width: 45%;
    }
    @media ${devices.tablet} {
        margin-top: 20px;
        font-size: 21px;
        width: 100%;
    }
    @media ${devices.mobileL} {
        font-size: 13px;
    }
`;

const Summary = styled.summary`
    margin: auto;
    position: relative;
    cursor: pointer;
    display: flex;
    user-select: none;
    list-style: none;
    justify-content: space-between;
    background-color: #ff6060;
    color: ${color.white};
    font-size: 18px;
    width: 582px;
    height: 52px;
    border-radius: 10px;
    @media ${devices.bodyScale} {
        width: 100%;
    }
    @media ${devices.tablet} {
        border-radius: 5px;
        font-size: 21px;
        height: 30px;
    }
    @media ${devices.mobileL} {
        font-size: 13px;
    }
`;

const SummaryTitle = styled.p`
    margin: auto auto auto 20px;
`;

const SummaryIcon = styled.img`
    size: 20px;
    margin: auto 12px auto auto;
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
        margin: 10px 10px 10px auto;
    }
`;

// Variable pour le style du contenu des collapses
const styleContentCollapse = {
    backgroundColor: color.grey,
    borderRadius: "0 0 5px 5px",
    marginTop: "-10px",
    width: "582px",
    padding: "40px 12px 27px 20px",
    fontSize: "18px",
    minHeight: "229px",
};

const LeftContentCollapse = styled.p`
    ${styleContentCollapse}
    font-weight: 400;
    color: ${color.primary};
    @media ${devices.bodyScale} {
        font-size: 20px;
        width: 100%;
    }
    @media ${devices.tablet} {
        font-size: 16px;
        padding: 28px 6px 3px 13px;
        min-height: 0;
    }
    @media ${devices.mobileL} {
        font-size: 12px;
    }
`;

const RightContainerContentCollapse = styled.ul`
    background-color: ${color.grey};
    ${styleContentCollapse}
    @media ${devices.bodyScale} {
        width: 100%;
    }
    @media ${devices.tablet} {
        font-size: 16px;
        padding: 28px 6px 3px 13px;
        min-height: 0;
    }
    @media ${devices.mobileL} {
        font-size: 12px;
    }
`;

const RightContentCollapse = styled.li`
    font-weight: 400;
    margin-bottom: 3px;
    color: ${color.primary};
`;
