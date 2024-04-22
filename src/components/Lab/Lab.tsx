import React from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

import { Section, SectionTitle, SectionText } from "../../styles/GlobalComponents";
import { SliderContainer, ImageContainer, NavButton, SliderLink, DotContainer, Dot, SliderOverlay, SliderDescription } from "./LabStyles";

export default function Lab() {
    const config = [
        {
            link: "https://18-galaxy-generator-ivory.vercel.app/",
            description: "A galaxy generator using ThreeJS. The goal was to play around particles, debugging UI and maths to create galaxies.",
            image: "https://strapi-production-e78b.up.railway.app/uploads/Galaxy_Generator_29ee3077b4.png"
        },
        {
            link: "https://19-scroll-based-animation-three.vercel.app/",
            description: "This time I'm mixing ThreeJS with HTML content for the first time. Here I'm experimenting with scroll based animations.",
            image: "https://strapi-production-e78b.up.railway.app/uploads/Scroll_Based_Animation_cb901c280a.png"            
        },
        {
            link: "https://20-physics-one.vercel.app/",
            description: "Combining ThreeJS with CannonJS to create a physics simulation. Don't burn your CPU!",
            image: "https://strapi-production-e78b.up.railway.app/uploads/Physics_8bcd3c0c7f.png"
        },
        {
            link: "http://jeremykim.fr/Tilevania/",
            description: "I was able to learn tiles, tilemaps and how we can easily build levels with them. Physics and collision also played a big part of this course. This time, the game is a simple platformer where you need to reach the exit.",
            image: "https://strapi-production-e78b.up.railway.app/uploads/Tilevania_8dde585_7211fdc79c.png"
        },
        {
            link: "http://jeremykim.fr/Glitch-Garden/",
            description: "This game is based on the famous Plants vs Zombies game with a tower defense system. This was a great opportunity for me to understand the animations, sprites and their relationships with the other components.",
            image: "https://strapi-production-e78b.up.railway.app/uploads/Glitch_Garden_a3f82b9_1bd9ce2b91.png"
        }
    ];

    const [imageIndex, setImageIndex] = React.useState(0);

    return (
        <Section id="lab">
            <SectionTitle>Lab</SectionTitle>
            <SectionText>
                I've recently wanted to experiment with creative web technologies 2D or 3D. Here's some fun experiments I've been working on.
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