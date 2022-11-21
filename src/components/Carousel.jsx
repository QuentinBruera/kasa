import React, { useState } from "react";
import styled from "styled-components";
import color from "../styles/color";
import ArrowIcon from "../assets/arrow.svg";
import { devices } from "../styles/mediaQueries";

const Carousel = ({ oneHousingData }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const altImage = "Image of housing number : " + (currentIndex + 1);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide
            ? oneHousingData.length - 1
            : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

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

const BaseArrowStyle = {
    position: "absolute",
    top: "150px",
    width: "46px",
    height: "79px",
    cursor: "pointer",
};

const CarouselLeftArrow = styled.img`
    left: 32px;
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
        width: 30px;
    }
`;

const CarouselRightArrow = styled.img`
    right: 32px;
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
        width: 30px;
    }
`;

const CounterImage = styled.p`
    position: absolute;
    bottom: 10px;
    left: 50%;
    font-size: 14px;
    color: ${color.white};
    ${(props) => props.oneHousingData.length === 1 && `display: none;`};
    @media ${devices.mobileL} {
        display: none;
    }
`;
