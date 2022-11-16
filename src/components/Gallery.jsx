import React from "react";
import styled from "styled-components";
import Card from "./Card";

const Gallery = ({ propsData }) => {
    console.log(propsData.length);
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
    margin: 99px 0 50px 0;
`;

const GridContainer = styled.div`
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 50px 60px;
    width: 1140px;
`;
