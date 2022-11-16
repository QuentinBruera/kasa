import React from "react";

import PropsBannerImage from "../assets/propos-banner.jpg";

import styled from "styled-components";
import color from "../styles/color";

const BannerPropos = () => {
    return (
        <BannerContainer>
            <BannerImage src={PropsBannerImage} alt="Kasa a propos banner" />
        </BannerContainer>
    );
};

export default BannerPropos;

const BannerContainer = styled.div`
    margin-top: 44px;
    height: 223px;
    position: relative;
    background: ${color.black};
    border-radius: 25px;
`;

const BannerImage = styled.img`
    border-radius: 25px;
    opacity: 0.7;
`;
