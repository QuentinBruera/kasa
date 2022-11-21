import React from "react";
import { NavLink } from "react-router-dom";

import RedLogo from "../assets/Logo-rouge.svg";

import styled from "styled-components";
import color from "../styles/color";
import { devices } from "../styles/mediaQueries";

const Header = () => {
    return (
        <HeaderContainer>
            <Logo src={RedLogo} alt="Logo de Kasa" />
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
    @media ${devices.bodyScale} {
        width: 90%;
        margin: 20px auto 0 auto;
    }
    @media ${devices.tablet} {
        margin: 30px auto 0 auto;
    }
    @media ${devices.mobileL} {
        margin: 20px auto 0 auto;
    }
`;

const Logo = styled.img`
    width: 210px;
    height: 68px;
    margin-left: 2px;
    @media ${devices.tablet} {
        width: 150px;
        height: auto;
        margin-left: 0px;
    }
    @media ${devices.mobileL} {
        width: 145px;
        height: 47px;
        margin-left: 0px;
    }
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
    @media ${devices.tablet} {
        font-size: 17px;
        margin-left: 28px;
    }
    @media ${devices.mobileL} {
        text-transform: uppercase;
        font-size: 12px;
        margin-left: 20px;
        margin-top: 4px;
    }
`;
