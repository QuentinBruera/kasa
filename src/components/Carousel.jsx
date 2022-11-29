import React, { useState } from "react";

// Importation de l'icone flèche
import ArrowIcon from "../assets/arrow.svg";

const Carousel = ({ oneHousingData }) => {
    // Création d'un useState pour controller sur quel index on est pour l'affichage des images dans le carrousel
    const [currentIndex, setCurrentIndex] = useState(0);
    // useState nous permet de suivre l'état d'un composant

    // Variable pour stocker l'alt des images
    const altImage = "Image of housing number : " + (currentIndex + 1);

    // Fonction pour gérer quand on clique sur la flèche de gauche, également si on est sur la première image pour renvoyer la dernière.
    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide
            ? oneHousingData.length - 1
            : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    // Fonction pour gérer quand on clique sur la flèche de droite, également si on est sur la dernière image pour renvoyer la première.
    const goToNext = () => {
        const isLastSlide = currentIndex === oneHousingData.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <section className="carouselContainer">
            <img
                className="carouselContainer__img"
                src={oneHousingData[currentIndex]}
                alt={altImage}
            />
            <img
                className="carouselContainer__rightArrow"
                style={{ display: oneHousingData.length === 1 && "none" }}
                src={ArrowIcon}
                alt="Right Arrow Icon"
                onClick={goToNext}
            />
            <img
                className="carouselContainer__leftArrow"
                style={{ display: oneHousingData.length === 1 && "none" }}
                src={ArrowIcon}
                alt="Left Arrow Icon"
                onClick={goToPrevious}
            />
            <p
                className="carouselContainer__counter"
                style={{ display: oneHousingData.length === 1 && "none" }}
            >
                {currentIndex + 1}/{oneHousingData.length}
            </p>
        </section>
    );
};

export default Carousel;
