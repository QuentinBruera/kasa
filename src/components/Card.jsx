import React from "react";

import styled from "styled-components";
import color from "../styles/color";

const Card = ({ propsData }) => {
    // console.log(propsData);
    return (
        <CardContainer href="https://styled-components.com/docs/basics">
            <a href="#">
                {/* <img className="thumb__img" src={propsData.cover} alt="" /> */}
                <CardImage src={propsData.cover} alt={propsData.title} />
                <CardContainerTitle>
                    <CardTitle>{propsData.title}</CardTitle>
                </CardContainerTitle>
            </a>
        </CardContainer>
    );
};

export default Card;

const CardContainer = styled.div`
    width: 340px;
    height: 340px;
    position: relative;
    border-radius: 10px;
`;

const CardImage = styled.img`
    width: 340px;
    height: 340px;
    object-fit: cover;
    border-radius: 10px;
`;

const CardContainerTitle = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 10px;
    background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(0, 0, 0, 0.5) 100%
    );
`;

const CardTitle = styled.p`
    position: absolute;
    right: 20px;
    bottom: 20px;
    left: 20px;
    font-size: 18px;
    margin: 0;
    color: ${color.white};
    font-size: 18px;
`;
