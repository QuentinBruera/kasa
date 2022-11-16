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
                    <NavigationLink to="/">
                        <NavigationLi>Accueil</NavigationLi>
                    </NavigationLink>
                    <NavigationLink to="/a-propos">
                        <NavigationLi>A Propos</NavigationLi>
                    </NavigationLink>
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

// styled(NavLink) combine styled-components et le NavLink de react-router-dom
// NavLink passe la class="active" si le to="" correspond à la route dans l'url
const NavigationLink = styled(NavLink)`
    color: ${color.primary};
    font-size: 24px;
    margin-left: 57px;
    &.active {
        text-decoration: underline;
    }
`;
