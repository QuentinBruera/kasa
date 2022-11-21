import React from "react";

import HomeBannerImage from "../assets/home-banner.jpg";

import styled from "styled-components";
import color from "../styles/color";
import { devices } from "../styles/mediaQueries";

const BannerHome = () => {
    return (
        <BannerContainer>
            <BannerImage src={HomeBannerImage} alt="Kasa home banner" />
            <BannerTitle>Chez vous, partout et ailleurs</BannerTitle>
        </BannerContainer>
    );
};

export default BannerHome;

const BannerContainer = styled.section`
    margin-top: 63px;
    height: 223px;
    position: relative;
    background: ${color.black};
    border-radius: 25px;
    @media ${devices.bodyScale} {
        width: 90%;
        margin: 17px auto 0 auto;
    }
    @media ${devices.tablet} {
        border-radius: 15px;
        height: 166px;
    }
    @media ${devices.mobileL} {
        border-radius: 10px;
        margin: 15px auto 0 auto;
        height: 111px;
    }
`;

const BannerImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 25px;
    opacity: 0.7;
    @media ${devices.tablet} {
        border-radius: 15px;
        height: 166px;
    }
    @media ${devices.mobileL} {
        border-radius: 10px;
        height: 111px;
    }
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
    @media ${devices.tablet} {
        font-size: 30px;
    }
    @media ${devices.mobileL} {
        font-size: 24px;
        width: 217px;
        left: 5%;
        top: 50%;
        text-align: left;
        transform: translate(0%, -50%);
    }
`;
