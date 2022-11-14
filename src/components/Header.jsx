import React from "react";

import styled from "styled-components";
import color from "../styles/color";

const Header = () => {
    return (
        <HeaderContainer>
            <Logo src="./assets/Logo-rouge.svg" alt="Logo de Kasa" />
            <Navigation>
                <NavigationUl>
                    <NavigationLi>
                        <NavigationAnchor href="http://localhost:3000/">
                            Accueil
                        </NavigationAnchor>
                    </NavigationLi>
                    <NavigationLi>
                        <NavigationAnchor href="http://localhost:3000/a-propos">
                            A Propos
                        </NavigationAnchor>
                    </NavigationLi>
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

const NavigationLi = styled.li`
    margin-left: 57px;
`;

const NavigationAnchor = styled.a`
    color: ${color.primary};
    font-size: 24px;
`;
