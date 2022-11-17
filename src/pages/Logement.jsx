import React from "react";
import Header from "../components/Header";

// useParams sert à récuperer le paramètre dans l'url
import { useParams } from "react-router-dom";
import Carousel from "../components/Carousel";
import LogementBody from "../components/LogementBody";

const Logement = ({ propsData }) => {
    // si je met "let paramas" je vais avoir un objet "id: valeur"
    // si je met "let { id }" je vais avoir directement la valeur en brut
    let { id } = useParams();

    const oneHousing = propsData.find((res) => res.id === id);

    return (
        <div>
            <Header />
            <Carousel oneHousingData={oneHousing.pictures} />
            <LogementBody oneHousingData={oneHousing} />
            <p>Logement</p>
        </div>
    );
};

export default Logement;
