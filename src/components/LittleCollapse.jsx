import React from "react";
import ArrowIcon from "../assets/arrow.svg";
import styled from "styled-components";
import color from "../styles/color";

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
`;

const Details = styled.details`
    cursor: default;
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
    color: #ffffff;
    font-size: 18px;
    width: 582px;
    height: 52px;
    border-radius: 10px;
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
`;

const LeftContentCollapse = styled.p`
    background-color: #f7f7f7;
    border-radius: 0 0 5px 5px;
    margin-top: -10px;
    width: 582px;
    padding: 40px 12px 27px 20px;
    font-size: 18px;
    min-height: 229px;
    color: ${color.primary};
`;

const RightContainerContentCollapse = styled.ul`
    background-color: #f7f7f7;
    border-radius: 0 0 5px 5px;
    margin-top: -10px;
    width: 582px;
    padding: 35px 12px 27px 20px;
    font-size: 18px;
    min-height: 229px;
`;

const RightContentCollapse = styled.li`
    margin-top: 5px;
    color: ${color.primary};
`;
