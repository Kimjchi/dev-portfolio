import React from "react";
import { Section, SectionTitle, SectionDivider } from "../../styles/GlobalComponents";
import { Boxes, Box, BoxNum, BoxText } from "./Accomplishments";

const data = [
    { number: 30, text: 'Personal Projects'},
    { number: 20, text: 'Countries visited', },
    { number: 2000, text: 'Manga chapters read', },
    { number: 10, text: 'Plants still alive', }
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