import React from "react";
import styled from "styled-components";
import color from "../styles/color";

// for (let i = 0; i < oneHousingData.tag.length; i++) {
//     console.log("i");
// }

const LogementBody = ({ oneHousingData }) => {
    const name = oneHousingData.host.name.split(" ");
    // console.log(name);

    const pictureAlt = "Photo de " + oneHousingData.host.name;

    console.log(oneHousingData);
    return (
        <Container>
            {/* Container pour les infos du haut */}
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
                    <div>{/* map(étoile) */}</div>
                </TopRightContainer>
            </TopContainer>
            {/* Container pour les collapses */}
            <div></div>
        </Container>
    );
};

export default LogementBody;

const Container = styled.section``;

const TopContainer = styled.section`
    display: flex;
    justify-content: space-between;
`;

const TopLeftContainer = styled.div``;

const TopRightContainer = styled.div``;

const TitleH1 = styled.h1`
    font-size: 36px;
    color: ${color.primary};
`;

const LocationP = styled.p`
    font-size: 18px;
    color: ${color.primary};
`;

const TagsContainer = styled.div`
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
    margin-right: 5px;
    display: flex;
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
    ${BaseName}
`;

const LastNameP = styled.p`
    ${BaseName}
`;

const HostPicture = styled.img`
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background-color: ${color.grey};
`;
