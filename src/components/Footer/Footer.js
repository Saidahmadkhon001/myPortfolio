import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+48 733 806 950">+48 733 806 950</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:saidahmadkhon001@gmail.com">
            saidahmadkhon001@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons target={'_blank'} href="https://github.com/Saidahmadkhon001">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons target={'_blank'} href="https://www.linkedin.com/in/saidahmad-kholmuhammadkhonov-0a6931196/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons target={'_blank'} href="https://instagram.com/saidahmadkhon001">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;