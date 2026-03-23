import React from "react";

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';



export default function Hero() {
    return (
        <>
            <Section row="true" nopadding="true">
            <LeftSection>
                <SectionTitle main="true" center="true">
                Welcome To <br />
                My Personal Portfolio
                </SectionTitle>
                <SectionText>
                My name is Jérémy Kim. I'm a full stack developer from Paris, France with a small passion for creative stuff.
                </SectionText>
                <a href="https://res.cloudinary.com/dy1eb4rez/image/upload/v1774224507/CV_2024_b334df9f64.pdf" target="blank">
                    <Button>Learn More</Button>
                </a>
            </LeftSection>
            </Section>
        </>
    );
}