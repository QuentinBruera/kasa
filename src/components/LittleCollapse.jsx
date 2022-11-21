import React from "react";
import ArrowIcon from "../assets/arrow.svg";
import styled from "styled-components";
import color from "../styles/color";
import { devices } from "../styles/mediaQueries";

const LittleCollapse = ({ oneHousingData }) => {
    return (
        <Container>
            <Details>
                <Summary>
                    <SummaryTitle>Description</SummaryTitle>
                    <SummaryIcon src={ArrowIcon} alt="" />
                </Summary>
                <LeftContentCollapse>
                    {oneHousingData.description}
                </LeftContentCollapse>
            </Details>
            <Details>
                <Summary>
                    <SummaryTitle>Équipements</SummaryTitle>
                    <SummaryIcon src={ArrowIcon} alt="" />
                </Summary>
                <RightContainerContentCollapse>
                    {oneHousingData.equipments.map((data, index) => (
                        <RightContentCollapse key={data + index}>
                            {data}
                        </RightContentCollapse>
                    ))}
                </RightContainerContentCollapse>
            </Details>
        </Container>
    );
};

export default LittleCollapse;

const Container = styled.section`
    margin-top: 24px;
    margin-bottom: 122px;
    display: flex;
    justify-content: space-between;
    @media ${devices.bodyScale} {
        width: 90%;
        margin: auto;
        margin-bottom: 100px;
    }
    @media ${devices.tablet} {
        flex-direction: column;
        margin-bottom: 165px;
    }
    @media ${devices.mobileL} {
        margin-bottom: 235px;
    }
`;

const Details = styled.details`
    cursor: default;
    @media ${devices.bodyScale} {
        margin: 44px 0 0 0;
        width: 45%;
    }
    @media ${devices.tablet} {
        margin-top: 20px;
        font-size: 21px;
        width: 100%;
    }
    @media ${devices.mobileL} {
        font-size: 13px;
    }
`;

const Summary = styled.summary`
    margin: auto;
    position: relative;
    cursor: pointer;
    display: flex;
    user-select: none;
    list-style: none;
    justify-content: space-between;
    background-color: #ff6060;
    color: ${color.white};
    font-size: 18px;
    width: 582px;
    height: 52px;
    border-radius: 10px;
    @media ${devices.bodyScale} {
        width: 100%;
    }
    @media ${devices.tablet} {
        border-radius: 5px;
        font-size: 21px;
        height: 30px;
        // margin: auto;
    }
    @media ${devices.mobileL} {
        font-size: 13px;
    }
`;

const SummaryTitle = styled.p`
    margin: auto auto auto 20px;
`;

const SummaryIcon = styled.img`
    size: 20px;
    margin: auto 32.6px auto auto;
    ${Details}[open] & {
        transform: rotate(180deg);
    }
    @media ${devices.bodyScale} {
        margin-right: 20px;
    }
    @media ${devices.tablet} {
        margin-right: 15px;
    }
    @media ${devices.mobileL} {
        margin: 10px 10px 10px auto;
    }
`;

const styleContentCollapse = {
    backgroundColor: color.grey,
    borderRadius: "0 0 5px 5px",
    marginTop: "-10px",
    width: "582px",
    padding: "40px 12px 27px 20px",
    fontSize: "18px",
    minHeight: "229px",
};

const LeftContentCollapse = styled.p`
    ${styleContentCollapse}
    color: ${color.primary};
    @media ${devices.bodyScale} {
        font-size: 20px;
        width: 100%;
    }
    @media ${devices.tablet} {
        font-size: 16px;
    }
    @media ${devices.mobileL} {
        padding: 25px 6px 52px 11px;
        font-size: 12px;
    }
`;

const RightContainerContentCollapse = styled.ul`
    background-color: ${color.grey};
    ${styleContentCollapse}
    @media ${devices.bodyScale} {
        width: 100%;
    }
    @media ${devices.tablet} {
        font-size: 16px;
    }
    @media ${devices.mobileL} {
        padding: 25px 6px 52px 11px;
        font-size: 12px;
    }
`;

const RightContentCollapse = styled.li`
    margin-top: 5px;
    color: ${color.primary};
`;
