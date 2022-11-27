import React from "react";

// Importation des modules pour la page Home
import Header from "../components/Header";
import BannerHome from "../components/BannerHome";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

const Home = ({ propsData }) => {
    return (
        <div>
            <Header />
            <BannerHome />
            <Gallery propsData={propsData} />
            <Footer />
        </div>
    );
};

export default Home;
