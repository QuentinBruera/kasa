import React from "react";
import Header from "../components/Header";
import Img from "../Logo-rouge.svg";

// useParams sert à récuperer le paramètre dans l'url
import { useParams } from "react-router-dom";

const Logement = ({ propsData }) => {
    // si je met "let paramas" je vais avoir un objet "id: valeur"
    // si je met "let { id }" je vais avoir directement la valeur en brut
    let { id } = useParams();
    console.log(id);

    const leLogement = propsData.find((res) => res.id === id);
    console.log(leLogement);

    // console.log(propsData.findOne({ id: "c67ab8a7" }));

    return (
        <div>
            <Header />
            <p>Logement</p>
        </div>
    );
};

export default Logement;
