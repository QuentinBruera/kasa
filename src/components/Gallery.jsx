import React from "react";

// Importation de styled-components
import styled from "styled-components";

// Importation de mon objet pour les couleurs
import color from "../styles/color";

// Importation de mon objet pour les mediaQueries
import { devices } from "../styles/mediaQueries";

// Importation du module Card
import Card from "./Card";

const Gallery = ({ propsData }) => {
    return (
        <CardSection>
            <GridContainer>
                {propsData.map((propsData, index) => (
                    <Card
                        propsData={propsData}
                        index={index}
                        key={propsData.id + index}
                    />
                ))}
            </GridContainer>
        </CardSection>
    );
};

export default Gallery;

const CardSection = styled.section`
    width: 1240px;
    margin: 43px auto 50px auto;
    padding: 1px;
    border-radius: 25px;
    background-color: ${color.grey};
    @media ${devices.bodyScale} {
        background-color: ${color.white};
        padding: 0px;
        margin: 30px auto 0 auto;
        width: 90%;
    }
    @media ${devices.mobileL} {
        margin: 22px auto 22px auto;
        background-color: ${color.white};
        padding: 0px;
    }
`;

const GridContainer = styled.div`
    margin: 56px auto 56px auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 50px 60px;
    width: 1140px;
    border-radius: 25px;
    align-content: center;
    @media ${devices.bodyScale} {
        margin: 22px auto 22px auto;
        grid-template-columns: 1fr 1fr;
        width: 100%;
        gap: 20px;
    }
    @media ${devices.tablet} {
        grid-template-columns: 1fr;
    }
    @media ${devices.mobileL} {
        grid-template-columns: 1fr;
    }
`;
