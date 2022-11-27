import React from "react";

// Importation de l'image de la bannière pour desktop et tablette
import PropsBannerImage from "../assets/propos-banner.jpg";

// Importation de l'image de la bannière pour les mobiles
import HomeBannerImagePhone from "../assets/home-banner-phone.jpg";

// Importation de styled-components
import styled from "styled-components";

// Importation de mon objet pour les couleurs
import color from "../styles/color";

// Importation de mon objet pour les mediaQueries
import { devices } from "../styles/mediaQueries";

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
    }
    @media ${devices.tablet} {
        margin-top: 35px;
    }
    @media ${devices.mobileL} {
        border-radius: 10px;
        margin-top: 16px;
    }
`;

// Variable pour le style des images
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
        border-radius: 10px;
        display: block;
    }
`;
