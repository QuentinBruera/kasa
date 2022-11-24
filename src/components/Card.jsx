import { NavLink } from "react-router-dom";

import styled from "styled-components";
import color from "../styles/color";

import { devices } from "../styles/mediaQueries";

const Card = ({ propsData, index }) => {
    return (
        <CardContainer>
            {/* <NavLink to="/logement"> */}
            <CardLink to={`/logement/${propsData.id}`}>
                {/* <img className="thumb__img" src={propsData.cover} alt="" /> */}
                <CardImage src={propsData.cover} alt={propsData.title} />
                <CardContainerTitle>
                    <CardTitle>{propsData.title}</CardTitle>
                </CardContainerTitle>
            </CardLink>
        </CardContainer>
    );
};

export default Card;

const CardContainer = styled.div`
    margin: auto;
    width: 340px;
    height: 340px;
    position: relative;
    border-radius: 10px;
    @media ${devices.bodyScale} {
        width: 335px;
        height: 255px;
    }
    @media ${devices.mobileL} {
        width: 335px;
        height: 255px;
    }
`;

const CardLink = styled(NavLink)``;

const CardImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
`;

const CardContainerTitle = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 10px;
    background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(0, 0, 0, 0.5) 100%
    );
`;

const CardTitle = styled.p`
    position: absolute;
    right: 20px;
    bottom: 20px;
    left: 20px;
    font-size: 18px;
    margin: 0;
    color: ${color.white};
    font-size: 18px;
    @media ${devices.mobileL} {
        bottom: 18px;
    }
`;
