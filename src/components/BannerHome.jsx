import React from "react";

import styled from "styled-components";
import color from "../styles/color";

const BannerHome = () => {
    return (
        <BannerContainer>
            <BannerImage src="./assets/home-banner.jpg" alt="Kasa banner" />
            <BannerTitle>Chez vous, partout et ailleurs</BannerTitle>
        </BannerContainer>
    );
};

export default BannerHome;

const BannerContainer = styled.div`
    margin-top: 63px;
    height: 223px;
    position: relative;
    background: ${color.black};
    border-radius: 25px;
`;

const BannerImage = styled.img`
    border-radius: 25px;
    opacity: 0.7;
`;

const BannerTitle = styled.h1`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    text-align: center;
    font-size: 48px;
    color: ${color.white};
`;
