import React from "react";

// Importation de l'icone étoile pleine
import FullStarIcon from "../assets/Etoile-pleine.svg";

// Importation de l'icone étoile vide
import EmptyStarIcon from "../assets/Etoile-vide.svg";

const LogementBody = ({ oneHousingData }) => {
    // Création d'un tableau pour séparer le Nom et le Prenom de la personne
    const name = oneHousingData.host.name.split(" ");

    // Variable pour stocker l'alt des images
    const pictureAlt = "Photo de " + oneHousingData.host.name;

    // Gère la création dynamique des étoiles pleines/vides en fonction du rating
    const starDisplay = [];
    let i = 1;
    while (i <= 5) {
        i <= oneHousingData.rating
            ? starDisplay.push(
                  <img
                      className="logementBodyContainer__rightContainer__starContainer__img"
                      src={FullStarIcon}
                      alt={i}
                      key={i}
                  />
              )
            : starDisplay.push(
                  <img
                      className="logementBodyContainer__rightContainer__starContainer__img"
                      src={EmptyStarIcon}
                      alt={i}
                      key={i}
                  />
              );
        i++;
    }

    return (
        <section className="logementBodyContainer">
            {/* Container des infos de gauche */}
            <div className="logementBodyContainer__leftContainer">
                <h1 className="logementBodyContainer__leftContainer__h1">
                    {oneHousingData.title}
                </h1>
                <p className="logementBodyContainer__leftContainer__p">
                    {oneHousingData.location}
                </p>
                {/* Container des Tags */}
                <div className="logementBodyContainer__leftContainer__tagsContainer">
                    {oneHousingData.tags.map((unTag, index) => (
                        <p
                            className="logementBodyContainer__leftContainer__tagsContainer__text"
                            key={unTag + index}
                        >
                            {unTag}
                        </p>
                    ))}
                </div>
            </div>
            {/* Container des infos de droite */}
            <div className="logementBodyContainer__rightContainer">
                <div className="logementBodyContainer__rightContainer__hostContainer">
                    {/* Nom / Prénom */}
                    <div className="logementBodyContainer__rightContainer__hostContainer__nameContainer">
                        <p className="logementBodyContainer__rightContainer__hostContainer__nameContainer__firstName">
                            {name[0]}
                        </p>
                        <p className="logementBodyContainer__rightContainer__hostContainer__nameContainer__lastName">
                            {name[1]}
                        </p>
                    </div>
                    {/* image profil */}
                    <img
                        className="logementBodyContainer__rightContainer__hostContainer__img"
                        src={oneHousingData.host.picture}
                        alt={pictureAlt}
                    />
                </div>
                {/* Container étoiles */}
                <div className="logementBodyContainer__rightContainer__starContainer">
                    {starDisplay}
                </div>
            </div>
        </section>
    );
};

export default LogementBody;
