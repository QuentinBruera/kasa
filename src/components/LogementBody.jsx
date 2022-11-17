import React from "react";
import styled from "styled-components";
import color from "../styles/color";
import FullStarIcon from "../assets/Etoile-pleine.svg";
import EmptyStarIcon from "../assets/Etoile-vide.svg";

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

    // };
    console.log(oneHousingData);
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
    margin-top: 24px;

    display: flex;
    justify-content: space-between;
`;

const TopLeftContainer = styled.div``;

const TopRightContainer = styled.div`
    margin-right: 1px;
`;

const TitleH1 = styled.h1`
    font-size: 36px;
    color: ${color.primary};
`;

const LocationP = styled.p`
    margin-top: 5px;
    font-size: 18px;
    color: ${color.primary};
`;

const TagsContainer = styled.div`
    margin-top: 2px;
    display: flex;
`;

const TagsP = styled.p`
    font-size: 14px;
    color: ${color.white};
    background-color: ${color.primary};
    padding: 4px 30px 3px 30px;
    min-width: 115px;
    text-align: center;
    border-radius: 10px;
    margin: 20px 10px 0 0;
`;

const HostContainer = styled.div`
    display: flex;
    justify-content: end;
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
`;

const LastNameP = styled.p`
    margin-top: 2px;
    ${BaseName}
`;

const HostPicture = styled.img`
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background-color: ${color.grey};
    margin: 0 *;
`;

const StarContainer = styled.div``;

const Star = styled.img`
    margin-top: 19px;
    margin-left: 4px;
`;
