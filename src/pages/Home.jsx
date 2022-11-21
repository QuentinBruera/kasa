import React from "react";
import styled from "styled-components";
import BannerHome from "../components/BannerHome";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Header from "../components/Header";

const Home = ({ propsData }) => {
    return (
        <HomeContainer>
            <Header />
            <BannerHome />
            <Gallery propsData={propsData} />
            <Footer />
        </HomeContainer>
    );
};

export default Home;

const HomeContainer = styled.div``;
