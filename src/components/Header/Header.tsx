import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

export default function Header() {
    return (
        <Container>
            <Div1>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', color:"white" }}>
                <DiCssdeck size="3rem" /> <span>Portfolio</span>
            </Link>
            </Div1>
            <Div2>
            <li>
                <Link href="#projects">
                <NavLink>Projects</NavLink>
                </Link>
            </li>
            <li>
                <Link href="#tech">
                <NavLink>Technologies</NavLink>
                </Link>
            </li>        
            <li>
                <Link href="#about">
                <NavLink>About</NavLink>
                </Link>
            </li>
            <li>
                <Link href="#lab">
                <NavLink>Lab</NavLink>
                </Link>
            </li>        
            </Div2>
            <Div3>
                <SocialIcons href="https://github.com/Kimjchi">
                <AiFillGithub size="3rem" />
                </SocialIcons>
                <SocialIcons href="https://www.linkedin.com/in/j%C3%A9r%C3%A9my-v-kim/">
                <AiFillLinkedin size="3rem" />
                </SocialIcons>
                <SocialIcons href="https://www.instagram.com/kimjchi/">
                <AiFillInstagram size="3rem"/>
                </SocialIcons>
            </Div3>
            </Container>
    );
}