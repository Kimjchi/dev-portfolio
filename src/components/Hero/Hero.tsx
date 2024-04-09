import React from "react";

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

interface HeroProps {
    handleClick?: () => void;
}

export default function Hero(props: HeroProps) {
    return (
        <>
            <Section row="true" nopadding="true">
            <LeftSection>
                <SectionTitle main="true" center="true">
                Welcome To <br />
                My Personal Portfolio
                </SectionTitle>
                <SectionText>
                The purpose of JavaScript Mastery is to help aspiring and established developers to take their development skills to the next level and build awesome apps.
                </SectionText>
                <Button onClick={props.handleClick}>Learn More</Button>
            </LeftSection>
            </Section>
        </>
    );
}