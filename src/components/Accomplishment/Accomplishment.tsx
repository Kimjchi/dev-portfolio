import React from "react";
import { Section, SectionTitle, SectionDivider } from "../../styles/GlobalComponents";
import { Boxes, Box, BoxNum, BoxText } from "./Accomplishments";

const data = [
    { number: 20, text: 'Open Source Projects'},
    { number: 1000, text: 'Students', },
    { number: 1900, text: 'Github Followers', },
    { number: 5000, text: 'Github Stars', }
  ];

export default function Accomplishment() {
    return (
        <Section>
            <SectionTitle>Personal Achievements</SectionTitle>
            <Boxes>
            {data.map((card, index) => (
                <Box key={index}>
                <BoxNum>{`${card.number}+`}</BoxNum>
                <BoxText>{card.text}</BoxText>
                </Box>
            ))}
            </Boxes>
            <SectionDivider/>
        </Section>
    );
}