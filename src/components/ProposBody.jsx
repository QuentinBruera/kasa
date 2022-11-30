import React from "react";

// Importation de styled-components
import styled from "styled-components";

// Importation de mon objet pour les couleurs
import color from "../styles/color";

// Importation de mon objet pour les mediaQueries
import { devices } from "../styles/mediaQueries";

// Importation du composant Collapse
import Collapse from "./Collapse";

const ProposBody = () => {
    const Fiabilité = {
        title: "Fiabilité",
        content:
            "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
    };

    const Respect = {
        title: "Respect",
        content:
            "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    };

    const Service = {
        title: "Service",
        content:
            "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    };
    const Sécurité = {
        title: "Sécurité",
        content:
            "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    };
    return (
        <section className="bigCollapseContainer">
            <Collapse
                propsData1={Fiabilité.title}
                propsData2={Fiabilité.content}
                props3={"big"}
            />
            <Collapse
                propsData1={Respect.title}
                propsData2={Respect.content}
                props3={"big"}
            />
            <Collapse
                propsData1={Service.title}
                propsData2={Service.content}
                props3={"big"}
            />
            <Collapse
                propsData1={Sécurité.title}
                propsData2={Sécurité.content}
                props3={"big"}
            />
        </section>
    );
};

export default ProposBody;

const Container = styled.section`
    width: 1240px;
    margin: 0 auto 0 auto;
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
    background-color: ${color.primary};
    color: ${color.white};
    @media ${devices.bodyScale} {
        width: 90%;
    }
    @media ${devices.tablet} {
        font-size: 21px;
        width: 95%;
    }
    @media ${devices.mobileL} {
        font-size: 13px;
        width: 100%;
        height: 30px;
    }
`;

const SummaryTitle = styled.p`
    margin: auto auto auto 13px;
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
        margin: 10px 6px 10px auto;
    }
`;

const ContentCollapse = styled.p`
    margin: auto;
    height: auto;
    background-color: ${color.grey};
    border-radius: 0 0 5px 5px;
    margin-top: -10px;
    width: 1023px;
    padding: 40px 27px 11px 18px;
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
        padding: 29px 6px 52px 13px;
        font-size: 12px;
        width: 100%;
    }
`;
