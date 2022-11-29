import React from "react";

// Importation de l'image de la bannière
import HomeBannerImage from "../assets/home-banner.jpg";

const BannerHome = () => {
    return (
        <section className="homeBannerContainer">
            <img
                className="homeBannerContainer__img"
                src={HomeBannerImage}
                alt="Kasa home banner"
            />
            <h1 className="homeBannerContainer__h1">
                Chez vous, partout et ailleurs
            </h1>
        </section>
    );
};

export default BannerHome;
