import React from "react";
import styled from "styled-components";
import color from "../styles/color";
import FullStarIcon from "../assets/Etoile-pleine.svg";
import EmptyStarIcon from "../assets/Etoile-vide.svg";
import { devices } from "../styles/mediaQueries";

// for (let i = 0; i < oneHousingData.tag.length; i++) {
//     console.log("i");
// }

const LogementBody = ({ oneHousingData }) => {
    const name = oneHousingData.host.name.split(" ");
    // console.log(name);

    const pictureAlt = "Photo de " + oneHousingData.host.name;

    const starDisplay = [];
    let i = 1;
    while (i <= 5) {
        i <= oneHousingData.rating
            ? starDisplay.push(<Star src={FullStarIcon} key={i}></Star>)
            : starDisplay.push(<Star src={EmptyStarIcon} key={i}></Star>);
        i++;
    }
    return (
        <TopContainer>
            {/* Container des infos de gauche */}
            <TopLeftContainer>
                <TitleH1>{oneHousingData.title}</TitleH1>
                <LocationP>{oneHousingData.location}</LocationP>
                <TagsContainer>
                    {oneHousingData.tags.map((unTag, index) => (
                        <TagsP key={unTag + index}>{unTag}</TagsP>
                    ))}
                </TagsContainer>
            </TopLeftContainer>
            {/* Container des infos de droite */}
            <TopRightContainer>
                <HostContainer>
                    {/* Nom / Prénom */}
                    <NameContainer>
                        <FirstNameP>{name[0]}</FirstNameP>
                        <LastNameP>{name[1]}</LastNameP>
                    </NameContainer>
                    {/* image profil */}
                    <HostPicture
                        src={oneHousingData.host.picture}
                        alt={pictureAlt}
                    />
                </HostContainer>
                {/* Container étoiles */}
                <StarContainer>{starDisplay}</StarContainer>
            </TopRightContainer>
        </TopContainer>
    );
};

export default LogementBody;

const TopContainer = styled.section`
    width: 1240px;
    margin: 24px auto 0 auto;
    display: flex;
    justify-content: space-between;
    @media ${devices.bodyScale} {
        width: 90%;
    }
    @media ${devices.tablet} {
        margin-top: 10px;
        flex-direction: column;
    }
    @media ${devices.mobileL} {
    }
`;

const TopLeftContainer = styled.div`
    @media ${devices.bodyScale} {
        max-width: 78%;
    }
    @media ${devices.tablet} {
        max-width: 100%;
    }
    @media ${devices.mobileL} {
    }
`;

const TopRightContainer = styled.div`
    margin-right: 1px;
    @media ${devices.bodyScale} {
    }
    @media ${devices.tablet} {
        margin-top: 16px;
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
    }
    @media ${devices.mobileL} {
    }
`;

const TitleH1 = styled.h1`
    font-size: 36px;
    color: ${color.primary};
    @media ${devices.bodyScale} {
        font-size: 30px;
    }
    @media ${devices.tablet} {
        font-size: 24px;
    }
    @media ${devices.mobileL} {
        font-size: 18px;
    }
`;

const LocationP = styled.p`
    margin-top: 5px;
    font-size: 18px;
    color: ${color.primary};
    @media ${devices.bodyScale} {
    }
    @media ${devices.tablet} {
    }
    @media ${devices.mobileL} {
        font-size: 14px;
    }
`;

const TagsContainer = styled.div`
    margin-top: 22px;
    display: flex;
    @media ${devices.bodyScale} {
    }
    @media ${devices.tablet} {
        flex-wrap: wrap;
        margin-right: 10px;
    }
    @media ${devices.mobileL} {
        margin-top: 0px;
    }
`;

const TagsP = styled.p`
    font-size: 14px;
    color: ${color.white};
    background-color: ${color.primary};
    padding: 4px 30px 3px 30px;
    min-width: 115px;
    text-align: center;
    border-radius: 10px;
    margin: auto 10px auto 0;
    @media ${devices.bodyScale} {
    }
    @media ${devices.tablet} {
        margin: 10px 10px 0 0;
        min-width: 84px;
    }
    @media ${devices.mobileL} {
        padding: 3px 5px 3px 5px;
        border-radius: 5px;
        font-size: 10px;
    }
`;

const HostContainer = styled.div`
    display: flex;
    justify-content: end;
    @media ${devices.bodyScale} {
    }
    @media ${devices.tablet} {
    }
    @media ${devices.mobileL} {
    }
`;

const NameContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 10px;
`;

const BaseName = {
    color: color.primary,
    fontSize: "18px",
    textAlign: "end",
};

const FirstNameP = styled.p`
    margin-bottom: 2px;
    ${BaseName}
    @media ${devices.bodyScale} {
    }
    @media ${devices.tablet} {
    }
    @media ${devices.mobileL} {
        // margin-bottom: 0px;
        font-size: 12px;
    }
`;

const LastNameP = styled.p`
    margin-top: 2px;
    ${BaseName}
    @media ${devices.bodyScale} {
    }
    @media ${devices.tablet} {
    }
    @media ${devices.mobileL} {
        // margin-top: 0px;
        font-size: 12px;
    }
`;

const HostPicture = styled.img`
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background-color: ${color.grey};
    margin: 0;
    @media ${devices.bodyScale} {
    }
    @media ${devices.tablet} {
    }
    @media ${devices.mobileL} {
        margin: auto;
        width: 32px;
        height: 32px;
    }
`;

const StarContainer = styled.div`
    margin: auto 0 auto 0;
`;

const Star = styled.img`
    margin-top: 19px;
    margin-left: 4px;
    @media ${devices.bodyScale} {
        margin: auto;
        width: 30px;
        height: 30px;
    }
    @media ${devices.tablet} {
    }
    @media ${devices.mobileL} {
        margin: auto;
        width: 15px;
        height: 15px;
    }
`;
