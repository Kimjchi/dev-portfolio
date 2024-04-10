import React from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

import { Section, SectionTitle, SectionText } from "../../styles/GlobalComponents";
import { SliderContainer, ImageContainer, NavButton, SliderLink, DotContainer, Dot, SliderOverlay, SliderDescription } from "./LabStyles";

export default function Lab() {
    const config = [
        {
            link: "/",
            description: "Description 1",
            image: "https://images.pexels.com/photos/20780447/pexels-photo-20780447/free-photo-of-amour-gens-personnes-individus.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            link: "/",
            description: "Description 2",
            image: "https://images.pexels.com/photos/19962748/pexels-photo-19962748/free-photo-of-lumineux-leger-art-eau.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            link: "/",
            description: "Description 3",
            image: "https://images.pexels.com/photos/20891018/pexels-photo-20891018/free-photo-of-bois-gens-personnes-individus.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
    ];

    const [imageIndex, setImageIndex] = React.useState(0);

    return (
        <Section id="lab">
            <SectionTitle>Lab</SectionTitle>
            <SectionText>
                I've recently wanted to experiment with creative web technologies 2D or 3D. Here's some fun expriments I've been working on.
            </SectionText>
            <SliderContainer>
                <SliderOverlay>
                    <SliderDescription>
                        {config[imageIndex].description}
                    </SliderDescription>
                </SliderOverlay>
                <ImageContainer src={config[imageIndex].image} />
                <SliderLink href={config[imageIndex].link} target="blank">
                    Take me there
                </SliderLink>
                <NavButton  onClick={() => setImageIndex((imageIndex - 1 + config.length) % config.length)}>
                    <FaArrowAltCircleLeft />
                </NavButton>
                <NavButton right="true" onClick={() => setImageIndex((imageIndex + 1) % config.length)}>
                    <FaArrowAltCircleRight />
                </NavButton>
                <DotContainer>
                    {config.map((_, index) => {
                        return <Dot key={index} active={(index === imageIndex).toString()} />
                    })}
                </DotContainer>
            </SliderContainer>
        </Section>
    );
}