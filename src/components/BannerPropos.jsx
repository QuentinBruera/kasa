import React from "react";

import PropsBannerImage from "../assets/propos-banner.jpg";

import styled from "styled-components";
import color from "../styles/color";
import { devices } from "../styles/mediaQueries";
import HomeBannerImagePhone from "../assets/home-banner-phone.jpg";

const BannerPropos = () => {
    return (
        <BannerContainer>
            <BannerImage src={PropsBannerImage} alt="Kasa a propos banner" />
            <BannerImagePhone
                src={HomeBannerImagePhone}
                alt="Kasa home banner"
            />
        </BannerContainer>
    );
};

export default BannerPropos;

const BannerContainer = styled.div`
    width: 1240px;
    margin: 44px auto 0 auto;
    height: 223px;
    position: relative;
    background: ${color.black};
    border-radius: 25px;
    @media ${devices.bodyScale} {
        margin-top: 44px;
        width: 90%;
        @media ${devices.tablet} {
            margin-top: 35px;
        }
        @media ${devices.mobileL} {
            margin-top: 22px;
        }
    }
`;

const Images = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "25px",
    opacity: "0.7",
};

const BannerImage = styled.img`
    ${Images}
    @media ${devices.mobileL} {
        display: none;
    }
`;

const BannerImagePhone = styled.img`
    ${Images}
    display: none;
    @media ${devices.mobileL} {
        display: block;
    }
`;
