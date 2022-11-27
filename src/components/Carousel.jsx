import React, { useState } from "react";

// Importation de l'icone flèche
import ArrowIcon from "../assets/arrow.svg";

// Importation de styled-components
import styled from "styled-components";

// Importation de mon objet pour les couleurs
import color from "../styles/color";

// Importation de mon objet pour les mediaQueries
import { devices } from "../styles/mediaQueries";

const Carousel = ({ oneHousingData }) => {
    // Création d'un useState pour controller sur quel index on est pour l'affichage des images dans le carrousel
    const [currentIndex, setCurrentIndex] = useState(0);

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
        <CarouselContainer>
            <CarouselImage src={oneHousingData[currentIndex]} alt={altImage} />
            <CarouselRightArrow
                oneHousingData={oneHousingData}
                src={ArrowIcon}
                alt="Right Arrow Icon"
                onClick={goToNext}
            />
            <CarouselLeftArrow
                oneHousingData={oneHousingData}
                src={ArrowIcon}
                alt="Left Arrow Icon"
                onClick={goToPrevious}
            />
            <CounterImage oneHousingData={oneHousingData}>
                {currentIndex + 1}/{oneHousingData.length}
            </CounterImage>
        </CarouselContainer>
    );
};

export default Carousel;

const CarouselContainer = styled.section`
    margin: 20px auto 0 auto;
    width: 1240px;
    height: 415px;
    position: relative;
    @media ${devices.bodyScale} {
        height: 320px;
        width: 90%;
    }
    @media ${devices.tablet} {
        height: 290px;
    }
    @media ${devices.mobileL} {
        margin-top: 27px;
        height: 255px;
    }
`;

const CarouselImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 25px;
    @media ${devices.bodyScale} {
        border-radius: 20px;
    }
    @media ${devices.tablet} {
        border-radius: 15px;
    }
    @media ${devices.mobileL} {
        border-radius: 10px;
    }
`;

// Variable pour le style des flèches
const BaseArrowStyle = {
    position: "absolute",
    top: "162px",
    width: "93px",
    cursor: "pointer",
};

const CarouselLeftArrow = styled.img`
    left: 5px;
    transform: rotate(90deg);
    ${BaseArrowStyle};
    ${(props) => props.oneHousingData.length === 1 && `display: none;`};
    @media ${devices.bodyScale} {
        left: 0px;
        top: 50%;
        transform: translateY(-50%) rotate(90deg);
        width: 40px;
    }
    @media ${devices.tablet} {
        width: 35px;
    }
    @media ${devices.mobileL} {
        width: 22px;
    }
`;

const CarouselRightArrow = styled.img`
    right: 5px;
    transform: rotate(-90deg);
    ${BaseArrowStyle};
    ${(props) => props.oneHousingData.length === 1 && `display: none;`};
    @media ${devices.bodyScale} {
        top: 50%;
        transform: translateY(-50%) rotate(-90deg);
        width: 40px;
        right: 0;
    }
    @media ${devices.tablet} {
        width: 35px;
    }
    @media ${devices.mobileL} {
        width: 22px;
    }
`;

const CounterImage = styled.p`
    position: absolute;
    bottom: 10px;
    left: 50%;
    font-size: 18px;
    color: ${color.white};
    ${(props) => props.oneHousingData.length === 1 && `display: none;`};
    @media ${devices.mobileL} {
        display: none;
    }
`;
