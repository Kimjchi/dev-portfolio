import React from "react";
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

export default function Technologies() {
    return (
        <Section id="tech">
            <SectionDivider divider="true" />
            <SectionTitle>Technologies</SectionTitle>
            <SectionText>
            I've worked with a range a technologies in the web development world.
            From Back-end, databases to Design. But I enjoy Front-end the most where my creativity can shine.
            </SectionText>
            <List>
            <ListItem>
                <picture>
                <DiReact size="3rem" />
                </picture>
                <ListContainer>
                <ListTitle>Front-End</ListTitle>
                <ListParagraph>
                    Experience with frameworks like<br />
                    React.js, Angular, Vue and Svelte<br />
                    And libraries like Redux, Tailwind, D3, GSAP
                </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <picture>
                <DiFirebase size="3rem" />
                </picture>
                <ListContainer>
                <ListTitle>Back-End</ListTitle>
                <ListParagraph>
                    Experience with <br />
                    Node, Python, Django and Databases (PostgreSQL, MongoDB, MySQL)
                </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <picture>
                <DiZend size="3rem" />
                </picture>
                <ListContainer>
                <ListTitle>UI/UX</ListTitle>
                <ListParagraph>
                    Experience with <br />
                    tools like Figma, Blender, Photoshop and Illustrator
                </ListParagraph>
                </ListContainer>
            </ListItem>
            </List>
            <SectionDivider coloralt="true" />
        </Section>

    );
}