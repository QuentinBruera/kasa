import React from "react";

// Importation des modules pour la page Propos
import Header from "../components/Header";
import BannerPropos from "../components/BannerPropos";
import ProposBody from "../components/ProposBody";
import Footer from "../components/Footer";

const Propos = () => {
    return (
        <div>
            <Header />
            <BannerPropos />
            <ProposBody />
            <Footer />
        </div>
    );
};

export default Propos;
