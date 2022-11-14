import React from "react";

const BannerHome = () => {
    return (
        <div className="bannerHome">
            <img
                className="bannerHome__img"
                src="./assets/home-banner.jpg"
                alt="Kasa banner"
            />
            <h1 className="bannerHome__title">
                Chez vous, partout et ailleurs
            </h1>
        </div>
    );
};

export default BannerHome;
