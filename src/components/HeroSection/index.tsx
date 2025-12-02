import React from 'react'
import LoginForm from '../LoginForm'
import bannerImage from '../../assets/images/Banner.png'
import mouseIcon from '../../assets/MouseSimple.png'
import {
  HeroSectionContainer,
  HeroContent,
  TextContent,
  HeroTitleContainer,
  HeroTitleBox,
  FormWrapper,
  LearnMoreSection,
  MouseIcon,
  LearnMoreText,
} from './styles'

const HeroSection: React.FC = () => {
  return (
    <HeroSectionContainer
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <HeroContent>
        <TextContent>
          <HeroTitleContainer>
            <HeroTitleBox>Tenha aqui</HeroTitleBox>
            <HeroTitleBox>a melhor</HeroTitleBox>
            <HeroTitleBox>experiência.</HeroTitleBox>
          </HeroTitleContainer>
        </TextContent>

        <FormWrapper>
          <LoginForm />
        </FormWrapper>
      </HeroContent>

      <LearnMoreSection>
        <MouseIcon src={mouseIcon} alt="Mouse icon" />
        <LearnMoreText>Saiba mais</LearnMoreText>
      </LearnMoreSection>
    </HeroSectionContainer>
  )
}

export default HeroSection

