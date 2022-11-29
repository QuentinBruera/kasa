import React from "react";

// Imporation de NavLink pour gérer les liens dans l'application
import { NavLink } from "react-router-dom";

// Importation de styled-components
import styled from "styled-components";

const Card = ({ propsData }) => {
    return (
        <div className="card">
            <CardLink to={`/logement/${propsData.id}`}>
                <img
                    className="card__img"
                    src={propsData.cover}
                    alt={propsData.title}
                />
                <div className="card__titleContainer">
                    <p className="card__titleContainer__p">{propsData.title}</p>
                </div>
            </CardLink>
        </div>
    );
};

export default Card;

const CardLink = styled(NavLink)``;
