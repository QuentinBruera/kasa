import React from "react";

// Importation de l'image de la bannière pour desktop et tablette
import PropsBannerImage from "../assets/propos-banner.jpg";

// Importation de l'image de la bannière pour les mobiles
import HomeBannerImagePhone from "../assets/home-banner-phone.jpg";

const BannerPropos = () => {
    return (
        <div className="proposBannerContainer">
            <img
                className="proposBannerContainer__img-desktop"
                src={PropsBannerImage}
                alt="Kasa a propos banner"
            />
            <img
                className="proposBannerContainer__img-mobile"
                src={HomeBannerImagePhone}
                alt="Kasa home banner"
            />
        </div>
    );
};

export default BannerPropos;
