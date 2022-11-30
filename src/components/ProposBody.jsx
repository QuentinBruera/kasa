import React from "react";

// Importation du composant Collapse
import Collapse from "./Collapse";

const ProposBody = () => {
    const Fiabilité = {
        title: "Fiabilité",
        content:
            "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
    };

    const Respect = {
        title: "Respect",
        content:
            "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    };

    const Service = {
        title: "Service",
        content:
            "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    };
    const Sécurité = {
        title: "Sécurité",
        content:
            "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    };
    return (
        <section className="bigCollapseContainer">
            <Collapse
                propsData1={Fiabilité.title}
                propsData2={Fiabilité.content}
                props3={"big"}
            />
            <Collapse
                propsData1={Respect.title}
                propsData2={Respect.content}
                props3={"big"}
            />
            <Collapse
                propsData1={Service.title}
                propsData2={Service.content}
                props3={"big"}
            />
            <Collapse
                propsData1={Sécurité.title}
                propsData2={Sécurité.content}
                props3={"big"}
            />
        </section>
    );
};

export default ProposBody;
