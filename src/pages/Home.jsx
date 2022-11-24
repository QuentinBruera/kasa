import React from "react";
import styled from "styled-components";
import BannerHome from "../components/BannerHome";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Header from "../components/Header";

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
