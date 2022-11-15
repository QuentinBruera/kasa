import React from "react";
import { NavLink } from "react-router-dom";

import styled from "styled-components";
import color from "../styles/color";

const Header = () => {
    return (
        <HeaderContainer>
            <Logo src="./assets/Logo-rouge.svg" alt="Logo de Kasa" />
            <Navigation>
                <NavigationUl>
                    <NavLink
                        to="/"
                        style={({ isActive }) => ({
                            textDecoration: isActive ? "underline" : "none",
                            color: color.primary,
                            fontSize: "24px",
                            marginLeft: "57px",
                        })}
                    >
                        <NavigationLi>Accueil</NavigationLi>
                    </NavLink>
                    <NavLink
                        to="/a-propos"
                        style={({ isActive }) => ({
                            textDecoration: isActive ? "underline" : "none",
                            color: color.primary,
                            fontSize: "24px",
                            marginLeft: "57px",
                        })}
                    >
                        <NavigationLi>A Propos</NavigationLi>
                    </NavLink>
                </NavigationUl>
            </Navigation>
        </HeaderContainer>
    );
};

export default Header;

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 40px;
`;

const Logo = styled.img`
    width: 210px;
    height: 68px;
    margin-left: 2px;
`;

const Navigation = styled.nav``;

const NavigationUl = styled.ul`
    display: flex;
`;

const NavigationLi = styled.li``;
