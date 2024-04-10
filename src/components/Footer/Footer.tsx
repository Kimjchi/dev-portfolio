import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

export default function Footer() {
    return (
        <FooterWrapper>
          <LinkList>
            <LinkColumn>
              <LinkTitle>Call</LinkTitle>
              <LinkItem href="tel:+33 6 25 07 39 70">+33 6 25 07 39 70</LinkItem>
            </LinkColumn>
            <LinkColumn>
              <LinkTitle>Email</LinkTitle>
              <LinkItem href="mailto:jeremy.vir.kim@gmail.com">
                jeremy.vir.kim@gmail.com
              </LinkItem>
            </LinkColumn>
          </LinkList>
          <SocialIconsContainer>
            <CompanyContainer>
              <Slogan>Experimenting with everything I can get my hands on</Slogan>
            </CompanyContainer>
            <SocialContainer>
              <SocialIcons href="https://github.com/Kimjchi">
                <AiFillGithub size="3rem" />
              </SocialIcons>
              <SocialIcons href="https://www.linkedin.com/in/j%C3%A9r%C3%A9my-v-kim/">
                <AiFillLinkedin size="3rem" />
              </SocialIcons>
              <SocialIcons href="https://www.instagram.com/kimjchi/">
                <AiFillInstagram size="3rem" />
              </SocialIcons>
            </SocialContainer>
          </SocialIconsContainer>
        </FooterWrapper>
      );
}