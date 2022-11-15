import React from "react";
// import { useEffect, useState } from "react";
import BannerHome from "../components/BannerHome";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Header from "../components/Header";
// import data from "../data/logements.json";

const Home = ({ propsData }) => {
    // const [propsData, setPropsData] = useState([data]);
    // useEffect(() => {
    //     setPropsData(data);
    //     console.log(propsData[2].id);
    // });
    // console.log(propsData);
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
