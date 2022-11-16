import React from "react";
import BannerPropos from "../components/BannerPropos";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProposBody from "../components/ProposBody";

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
