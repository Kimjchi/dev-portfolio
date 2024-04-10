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
                <a href="https://strapi-production-e78b.up.railway.app/uploads/CV_2024_bb37cde0c3.pdf" target="blank">
                    <Button>Learn More</Button>
                </a>
            </LeftSection>
            </Section>
        </>
    );
}