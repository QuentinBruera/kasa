import React from "react";
import styled from "styled-components";
import Card from "./Card";

const Gallery = ({ propsData }) => {
    console.log(propsData.length);
    return (
        <CardSection>
            <GridContainer>
                {propsData.map((propsData, index) => (
                    <Card propsData={propsData} key={index} />
                ))}
            </GridContainer>
        </CardSection>
    );
};

export default Gallery;

const CardSection = styled.section`
    margin-top: 99px;
`;

const GridContainer = styled.div`
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 50px 60px;
    width: 1140px;
`;
