import React from "react";
import styled from "styled-components";
import color from "../styles/color";

const ProposBody = () => {
    return (
        <Container>
            <Details>
                <Summary>
                    <Title>Fiabilité</Title>
                    <Arrow src="./assets/arrow.svg" alt="Arrow Icon" />
                </Summary>
                <Text>
                    Les annonces postées sur Kasa garantissent une fiabilité
                    totale. Les photos sont conformes aux logements, et toutes
                    les informations sont régulièrement vérifiées par nos
                    équipes.
                </Text>
            </Details>
            <Details>
                <Summary>
                    <Title>Respect</Title>
                    <Arrow src="./assets/arrow.svg" alt="Arrow Icon" />
                </Summary>
                <Text>
                    La bienveillance fait partie des valeurs fondatrices de
                    Kasa. Tout comportement discriminatoire ou de perturbation
                    du voisinage entraînera une exclusion de notre plateforme.
                </Text>
            </Details>
            <Details>
                <Summary>
                    <Title>Service</Title>
                    <Arrow src="./assets/arrow.svg" alt="Arrow Icon" />
                </Summary>
                <Text>
                    Nos équipes se tiennent à votre disposition pour vous
                    fournir une expérience parfaite. N'hésitez pas à nous
                    contacter si vous avez la moindre question.
                </Text>
            </Details>
            <Details>
                <Summary>
                    <Title>Sécurité</Title>
                    <Arrow src="./assets/arrow.svg" alt="Arrow Icon" />
                </Summary>
                <Text>
                    La sécurité est la priorité de Kasa. Aussi bien pour nos
                    hôtes que pour les voyageurs, chaque logement correspond aux
                    critères de sécurité établis par nos services. En laissant
                    une note aussi bien à l'hôte qu'au locataire, cela permet à
                    nos équipes de vérifier que les standards sont bien
                    respectés. Nous organisons également des ateliers sur la
                    sécurité domestique pour nos hôtes.
                </Text>
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

const Title = styled.p`
    margin: auto auto auto 18px;
`;

const Arrow = styled.img`
    size: 20px;
    margin: auto 32.6px auto auto;
    ${Details}[open] & {
        transform: rotate(180deg);
    }
`;

const Text = styled.p`
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
